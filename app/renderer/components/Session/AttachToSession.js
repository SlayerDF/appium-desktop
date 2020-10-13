import React, { Component } from 'react';
import { Form, Card, Input } from 'antd';
import SessionCSS from './Session.css';

const FormItem = Form.Item;

function formatCaps (caps) {
  let importantCaps = [caps.app, caps.platformName, caps.deviceName];
  if (caps.automationName) {
    importantCaps.push(caps.automationName);
  }
  return importantCaps.join(', ').trim();
}

export default class AttachToSession extends Component {

  getSessionInfo (session) {
    return `${session.id} — ${formatCaps(session.capabilities)}`;
  }

  render () {
    let {setAttachSessId, t} = this.props;
    return (<Form>
      <FormItem>
        <Card>
          <p className={SessionCSS.localDesc}>{t('connectToExistingSessionInstructions')}<br/>{t('selectSessionIDInDropdown')}</p>
        </Card>
      </FormItem>
      <FormItem>
        <Input
          placeholder={t('enterYourSessionId')}
          onChange={(e) => setAttachSessId(e.target.value)}>
        </Input>
      </FormItem>
    </Form>);
  }
}
