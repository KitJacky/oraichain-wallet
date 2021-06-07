import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { connect } from 'react-redux';
// import { useHistory } from 'react-router';
import queryString from 'query-string';
import _ from 'lodash';
import Big from 'big.js';

import PinWrap, { openPinWrap } from './PinWrap';
import { getTxBodySend, getTxBodyMultiSend, getTxBodyDelegate, getTxCreateValidator, getTxBodyUndelegate, getTxBodyMsgWithdrawDelegatorReward } from '../utils';

const Transaction = ({ user, history }) => {
  const $ = window.jQuery;
  const { t, i18n } = useTranslation();
  const queryStringParse = queryString.parse(history.location.search) || {};
  const payload = JSON.parse(queryStringParse.raw_message || '{}');
  const cosmos = window.cosmos;

  useEffect(() => {
    if (window.stdSignMsgByPayload) {
      const txBody = window.stdSignMsgByPayload;
      $('#tx-json').html(JSON.stringify(txBody));
    } else if (payload && payload.value) {
      const cloneObj = JSON.parse(JSON.stringify(payload));
      if (_.get(cloneObj, "value.fee.amount") && cloneObj.value.fee.amount[0]) {
        cloneObj.value.fee.amount[0] = new Big(cloneObj.value.fee.amount[0]).times(0.000001);
      }
      if(_.get(cloneObj, "value.msg.0.value.amount.0.amount")) {
        const amountString = _.get(cloneObj, "value.msg.0.value.amount.0.amount");
        _.set(cloneObj, "value.msg.0.value.amount.0.amount", new Big(amountString).times(0.000001))
      }
      if(_.get(cloneObj, "value.msg.0.value.amount.amount")) {
        const amountString = _.get(cloneObj, "value.msg.0.value.amount.amount");
        _.set(cloneObj, "value.msg.0.value.amount.amount", new Big(amountString).times(0.000001))
      }
      $('#tx-json').html(JSON.stringify(cloneObj.value));
    }
  }, []);

  const denyHandler = () => {
    // clear, close if there is window.opener
    if (window.opener) {
      window.opener.postMessage('deny', '*');
      window.close();
    }
  };

  const onChildKey = async (childKey) => {
    try {
      // will allow return childKey from Pin
      const type = _.get(payload, 'type');
      let txBody;
      const memo = _.get(payload, 'value.memo') || "";
      switch (type) {
        case 'cosmos-sdk/MsgDelegate' : {
          const amount = new Big(_.get(payload, 'value.msg.0.value.amount.amount') || 0).toString();
          const validator_address = _.get(payload, 'value.msg.0.value.validator_address');
          txBody = getTxBodyDelegate(user, validator_address, amount, memo);
          break;
        }
        case 'cosmos-sdk/MsgUndelegate' : {
          const amount = new Big(_.get(payload, 'value.msg.0.value.amount.amount') || 0).toString();
          const validator_address = _.get(payload, 'value.msg.0.value.validator_address');
          txBody = getTxBodyUndelegate(user, validator_address, amount, memo);
          break;
        }
        case 'cosmos-sdk/MsgCreateValidator': {
          txBody = getTxCreateValidator(_.get(payload, 'value.msg.0.value'));
          break;
        }
        case 'cosmos-sdk/MsgWithdrawDelegationReward': {
          txBody = getTxBodyMsgWithdrawDelegatorReward(user, _.get(payload, 'value.msg.0.value.validator_address'));
          break;
        }
        default : {
          const msgs = _.get(payload, 'value.msg');
          if (msgs.length > 1) {
            txBody = getTxBodyMultiSend(user, msgs, memo);
          } else {
            const amount = new Big(_.get(payload, 'value.msg.0.value.amount.0.amount') || 0).toString();
            const to = _.get(payload, 'value.msg.0.value.to_address');
            txBody = getTxBodySend(user, to, amount, memo);
          }
        }
        
      }
      // higher gas limit
      const res = await cosmos.submit(childKey, txBody, 'BROADCAST_MODE_BLOCK') || {};
      if (queryStringParse.signInFromScan) {
        window.opener.postMessage(res.tx_response, "*");
        window.close();
      } else {
        $('#tx-json').text(res.tx_response.raw_log);
      }
    } catch (ex) {
      alert(ex.message);
    } finally {
      // setBlocking(false);
    }
  };

  return (
    <div>
      <h2>Sign Transaction</h2>
      <form className="keystation-form">
        <input style={{ display: 'none' }} type="text" tabIndex={-1} spellCheck="false" name="account" defaultValue={user.name} />
        <input style={{ display: 'none' }} type="password" autoComplete="current-password" tabIndex={-1} spellCheck="false" />
        <div className="keystation-tx-json" id="tx-json"></div>
        <div className="tx-btn-wrap">
          <button className="button" type="button" className="cancel" onClick={denyHandler}>
            {t('deny')}
          </button>
          <button type="button" onClick={openPinWrap} id="allowBtn">
            {t('allow')} <span></span>
          </button>
        </div>
      </form>

      <PinWrap show={false} pinType="tx" onChildKey={onChildKey} closePopup={queryStringParse.signInFromScan}/>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    user: state.user
  };
}

export default connect(mapStateToProps)(Transaction);
