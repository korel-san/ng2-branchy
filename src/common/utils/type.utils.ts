import * as _ from 'lodash/index'
import {RenamableNode} from '../../branchy.types';

export function applyNewValueToRenamable(value: RenamableNode, newValue: string): RenamableNode {
  const renamableValue: RenamableNode = _.merge({}, value as RenamableNode);
  renamableValue.setName(newValue);
  return renamableValue;
}

export function isValueEmpty(value: string): boolean {
  return _.isEmpty(_.trim(value))
}

export function isRenamable(value: any) {
  return value.setName !== undefined;
}
