import { CompilerConfig } from '@ton/blueprint';

export const compile: CompilerConfig = {
    targets: ['tests/utils/contracts/params.fc', 'tests/utils/contracts/op-codes.fc', 'tests/utils/contracts/discovery-params.fc', 'tests/utils/contracts/jetton-utils.fc', 'tests/utils/contracts/jetton-minter-discoverable.fc'],
};