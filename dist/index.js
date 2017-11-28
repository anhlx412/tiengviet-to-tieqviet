"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _ = require("lodash");
const codes = [
    {
        to: 'c(?!(h|H))|q',
        from: 'k'
    },
    {
        to: 'C(?!(h|H))|Q',
        from: 'K'
    },
    {
        to: 'd|g(i|I)|r',
        from: 'z',
    },
    {
        to: 'D|G(i|I)|R',
        from: 'Z'
    },
    {
        to: 'đ',
        from: 'd'
    },
    {
        to: 'Đ',
        from: 'D'
    },
    {
        to: 'g(i|ì|í|ỉ|ĩ|ị|I|Ì|Í|Ỉ|Ĩ|Ị)',
        from: 'z$1'
    },
    {
        to: 'G(i|ì|í|ỉ|ĩ|ị|I|Ì|Í|Ỉ|Ĩ|Ị)',
        from: 'Z$1'
    },
    {
        to: '(g|G)(h|H)',
        from: '$1'
    },
    {
        to: 'k(h|H)',
        from: 'x'
    },
    {
        to: 'K(h|H)',
        from: 'X'
    },
    {
        to: 'n(g|G)(h|H)?',
        from: 'q'
    },
    {
        to: 'N(g|G)(h|H)?',
        from: 'Q'
    },
    {
        to: '(n|N)(h|H)',
        from: '$1\''
    },
    {
        to: 'p(h|H)',
        from: 'f'
    },
    {
        to: 'P(h|H)',
        from: 'F'
    },
    {
        to: 't(h|H)',
        from: 'w'
    },
    {
        to: 'T(h|H)',
        from: 'W'
    },
    {
        to: 't(r|R|z|Z)|c(h|H)',
        from: 'c'
    },
    {
        to: 'T(r|R|z|Z)|C(h|H)',
        from: 'C'
    }
];
function convert(text) {
    if (typeof text !== 'string') {
        return `Convert ${typeof text} to String!!!`;
    }
    _.each(codes, function (code) {
        text = _.replace(text, new RegExp(code.to, 'g'), code.from);
    });
    return text;
}
exports.convert = convert;
