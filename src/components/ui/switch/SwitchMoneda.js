import React from 'react';
import { Switch } from 'antd';

const SwitchMoneda= () => {
    return (
        <>
        <Switch checkedChildren="PESO" unCheckedChildren="DOLAR" defaultChecked />
      </>
    );
}

export default SwitchMoneda;