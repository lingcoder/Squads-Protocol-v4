/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */

import * as beet from '@metaplex-foundation/beet'
/**
 * This type is used to derive the {@link ConfigUpdateType} type as well as the de/serializer.
 * However don't refer to it in your code but use the {@link ConfigUpdateType} type instead.
 *
 * @category userTypes
 * @category enums
 * @category generated
 * @private
 */
export type ConfigUpdateTypeRecord = {
  AddMember: { reallocated: boolean }
  RemoveMember: void /* scalar variant */
  ChangeThreshold: void /* scalar variant */
  SetConfigAuthority: void /* scalar variant */
  SetTimeLock: void /* scalar variant */
}

/**
 * Union type respresenting the ConfigUpdateType data enum defined in Rust.
 *
 * NOTE: that it includes a `__kind` property which allows to narrow types in
 * switch/if statements.
 * Additionally `isConfigUpdateType*` type guards are exposed below to narrow to a specific variant.
 *
 * @category userTypes
 * @category enums
 * @category generated
 */
export type ConfigUpdateType = beet.DataEnumKeyAsKind<ConfigUpdateTypeRecord>

export const isConfigUpdateTypeAddMember = (
  x: ConfigUpdateType
): x is ConfigUpdateType & { __kind: 'AddMember' } => x.__kind === 'AddMember'
export const isConfigUpdateTypeRemoveMember = (
  x: ConfigUpdateType
): x is ConfigUpdateType & { __kind: 'RemoveMember' } =>
  x.__kind === 'RemoveMember'
export const isConfigUpdateTypeChangeThreshold = (
  x: ConfigUpdateType
): x is ConfigUpdateType & { __kind: 'ChangeThreshold' } =>
  x.__kind === 'ChangeThreshold'
export const isConfigUpdateTypeSetConfigAuthority = (
  x: ConfigUpdateType
): x is ConfigUpdateType & { __kind: 'SetConfigAuthority' } =>
  x.__kind === 'SetConfigAuthority'
export const isConfigUpdateTypeSetTimeLock = (
  x: ConfigUpdateType
): x is ConfigUpdateType & { __kind: 'SetTimeLock' } =>
  x.__kind === 'SetTimeLock'

/**
 * @category userTypes
 * @category generated
 */
export const configUpdateTypeBeet = beet.dataEnum<ConfigUpdateTypeRecord>([
  [
    'AddMember',
    new beet.BeetArgsStruct<ConfigUpdateTypeRecord['AddMember']>(
      [['reallocated', beet.bool]],
      'ConfigUpdateTypeRecord["AddMember"]'
    ),
  ],
  ['RemoveMember', beet.unit],
  ['ChangeThreshold', beet.unit],
  ['SetConfigAuthority', beet.unit],
  ['SetTimeLock', beet.unit],
]) as beet.FixableBeet<ConfigUpdateType, ConfigUpdateType>
