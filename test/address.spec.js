const { expect } = require('chai');
const { Address: addresses } = require('../index.js');

describe('toStandard', function () {
  it('should return a standard address for ethereum', function () {
    const address = '0xb3f631d686b706d308bBd1F3259455e33e9e1E4E';
    const intAddress = 1027399672797809865638060860065780941489646214734n;
    const rawHexAddress = 'b3f631d686b706d308bBd1F3259455e33e9e1E4E';
    
    const result = addresses.toStandard(address, 'ethereum');
    const intResult = addresses.toStandard(intAddress, 'ethereum');
    const hexResult = addresses.toStandard(rawHexAddress, 'ethereum');
    const detectedResult = addresses.toStandard(address);

    const expected = '0xb3f631d686b706d308bbd1f3259455e33e9e1e4e';
    expect(result).to.equal(expected);
    expect(intResult).to.equal(expected);
    expect(hexResult).to.equal(expected);
    expect(detectedResult).to.equal(expected);
  });

  it('should return a standard address for starknet', function () {
    const address = '0x04a472fE795cc40e9dc838fE4f1608cb91BF027854d016675eC81e172a2e3599';
    const intAddress = 2099807972647657112397945542074228174142925999869997955893525634648181192089n;
    const rawHexAddress = '04a472fE795cc40e9dc838fE4f1608cb91BF027854d016675eC81e172a2e3599';
    
    const result = addresses.toStandard(address, 'starknet');
    const intResult = addresses.toStandard(intAddress, 'starknet');
    const hexResult = addresses.toStandard(rawHexAddress, 'starknet');
    const detectedResult = addresses.toStandard(address);

    const expected = '0x04a472fe795cc40e9dc838fe4f1608cb91bf027854d016675ec81e172a2e3599';
    expect(result).to.equal(expected);
    expect(intResult).to.equal(expected);
    expect(hexResult).to.equal(expected);
    expect(detectedResult).to.equal(expected);
  });

  it('should handle zero address for both', function () {
    const ethAddress = '0x0000000000000000000000000000000000000000';
    const starkAddress = '0x0000000000000000000000000000000000000000000000000000000000000000';
    const intAddress = 0;
    const ethereum = addresses.toStandard(ethAddress, 'ethereum');
    const starknet = addresses.toStandard(starkAddress, 'starknet');
    const ethZero = addresses.toStandard(intAddress, 'ethereum');
    const starknetZero = addresses.toStandard(intAddress, 'starknet');

    expect(ethereum).to.equal(ethAddress);
    expect(starknet).to.equal(starkAddress);
    expect(ethZero).to.equal(ethAddress);
    expect(starknetZero).to.equal(starkAddress);
  });

  it('should test for equality', function () {
    let address1, address2;

    // Should be true
    address1 = '0xb3f631d686b706d308bBd1F3259455e33e9e1E4E';
    address2 = '0xb3f631d686b706d308bbd1f3259455e33e9e1e4e';
    expect(addresses.areEqual(address1, address2)).to.be.true;

    address1 = '0xb3f631d686b706d308bBd1F3259455e33e9e1E4E';
    address2 = 1027399672797809865638060860065780941489646214734n;
    expect(addresses.areEqual(address1, address2)).to.be.true;

    address1 = '0xb3f631d686b706d308bBd1F3259455e33e9e1E4E';
    address2 = 'b3f631d686b706d308bBd1F3259455e33e9e1E4E';
    expect(addresses.areEqual(address1, address2)).to.be.true;

    address1 = '0xb3f631d686b706d308bbd1f3259455e33e9e1e4e';
    address2 = 1027399672797809865638060860065780941489646214734n;
    expect(addresses.areEqual(address1, address2)).to.be.true;

    // Should be false
    address1 = '0x03f631d686b706d308bbd1f3259455e33e9e1e4e';
    address2 = 1027399672797809865638060860065780941489646214734n;
    expect(addresses.areEqual(address1, address2)).to.be.false;

    address1 = '0xb3f631d686b706d308bbd1f3259455e33e9e1e4f';
    address2 = '0xb3f631d686b706d308bbd1f3259455e33e9e1e4e';
    expect(addresses.areEqual(address1, address2)).to.be.false;

    address1 = '0xb3f631d686b706d308bbd1f3259455e33e9e1e4e';
    address2 = '0x000000000000000000000000b3f631d686b706d308bbd1f3259455e33e9e1e4e';
    expect(addresses.areEqual(address1, address2, 'l1', 'l2')).to.be.false;

    address1 = '0x0000000000000000000000000000000000000000';
    address2 = '0x0000000000000000000000000000000000000000000000000000000000000000';
    expect(addresses.areEqual(address1, address2, 'l1', 'l2')).to.be.false;
  });

  it('should infer chain correctly', function () {
    expect(addresses.inferChain('0xb3f631d686b706d308bBd1F3259455e33e9e1E4E')).to.equal('ethereum');
    expect(addresses.inferChain('0xb3f631d686b706d308bbd1f3259455e33e9e1e4e')).to.equal('ethereum');

    expect(addresses.inferChain('0x04a472fe795cc40e9dc838fe4f1608cb91bf027854d016675ec81e172a2e3599')).to.equal('starknet');
    expect(addresses.inferChain('0x04f7cFf6cCc9254E2B325D2DD9fCaA0128126Bacc5CB5957E1c5a45b99770ce4')).to.equal('starknet');

    expect(addresses.inferChain(1027399672797809865638060860065780941489646214734n)).to.equal('ethereum');
    expect(addresses.inferChain(2247097934540446211494964943374780971694749891460604801791934968891189493760n)).to.equal('starknet');    
  });
});
