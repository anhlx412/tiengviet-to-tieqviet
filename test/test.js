'use strict';

var expect = require('chai').expect;
var index = require('../dist/index.js');

describe('#convert', function() {
    it('Luật giáo dục', function() {
        var result = index.convert('Luật giáo dục');
        expect(result).to.equal('Luật záo zụk');
    });
    it('Trong đầm gì đẹp bằng sen', function() {
        var result = index.convert('Trong đầm gì đẹp bằng sen');
        expect(result).to.equal('Coq dầm zì dẹp bằq sen');
    });
    it('Thói ăn chơi xa xỉ, vô độ của chúa Trịnh và các quan lại hầu cận trong phủ được được miêu tả thông quan những cảnh và những việc cụ thể', function() {
        var result = index.convert('Thói ăn chơi xa xỉ, vô độ của chúa Trịnh và các quan lại hầu cận trong phủ được được miêu tả thông quan những cảnh và những việc cụ thể');
        expect(result).to.equal("Wói ăn cơi xa xỉ, vô dộ kủa cúa Cịn' và kák kuan lại hầu kận coq fủ dượk dượk miêu tả wôq kuan n'ữq kản' và n'ữq việk kụ wể");
    });
});