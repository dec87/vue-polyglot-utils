[![Build Status](https://travis-ci.org/guillaumevincent/vue-polyglot-utils.svg?branch=master)](https://travis-ci.org/guillaumevincent/vue-polyglot-utils)

> utils for Vue-Polyglot

## Vue-Polyglot-Utils v0.1.0

## Installation

    npm install --save-dev vue-polyglot-utils

## extractLocales(string)

return the locales parsed in string

    import {extractLocales} from 'vue-polyglot-utils';
    
    const string = "{{$t('test')}}";
    parser.extractLocales(string) // {"test": "test"}

## License

License MIT (see [LICENSE](LICENSE) file)
