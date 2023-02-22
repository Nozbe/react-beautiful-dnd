// @flow
import React from 'react';
import checkReactVersion from './check-react-version';
import checkDoctype from './check-doctype';
import useDevSetupWarning from '../use-dev-setup-warning';

const { peerDependencies } = require('../../../package.json');

export default function useStartupValidation(win: WindowProxy) {
  useDevSetupWarning(() => {
    checkReactVersion(peerDependencies.react, React.version);
    checkDoctype(win.document);
  }, []);
}
