let fs = require('fs');
let expect = require('chai').expect
let assert = require('chai').assert

describe('ProductDescription', function() {
  it(`should import the Album Interface @album-interface-imported-into-product-description`, function () {
    let file;
    try {
      file = fs.readFileSync(__dirname + '/../../../app/product-description/product-description.component.ts').toString();
    } catch (e) {
      assert(false, "ProductDescriptionComponent doesn't exist yet.")
    }
    let re = /import\s*{\s*AlbumInfo\s*}\s*from\s*[\'|\"]\.\.\/album-info[\'|\"]\;?/
    assert(Array.isArray(file.match(re)) && file.match(re) != null, "The Album Interface hasn't been imported into the ProductDescriptionComponent yet.");
  });
});