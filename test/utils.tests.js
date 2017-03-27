import test from 'ava';
import parser from '../src/utils';

test(t => {
  const string = "{{$t('test')}}";
  const expectedLocales = {"test": "test"};
  t.deepEqual(parser.extractLocales(string), expectedLocales);
});
test(t => {
  const string = '{{$t("test")}}';
  const expectedLocales = {"test": "test"};
  t.deepEqual(parser.extractLocales(string), expectedLocales);
});
test(t => {
  const string = '{{$t("test","default message")}}';
  const expectedLocales = {"test": "default message"};
  t.deepEqual(parser.extractLocales(string), expectedLocales);
});
test(t => {
  const string = '{{$t("test"  ,  "default message")}}';
  const expectedLocales = {"test": "default message"};
  t.deepEqual(parser.extractLocales(string), expectedLocales);
});
test(t => {
  const string = '{{$t(\'test\'  ,  "default message")}}';
  const expectedLocales = {"test": "default message"};
  t.deepEqual(parser.extractLocales(string), expectedLocales);
});
test(t => {
  const string = '{{$t("test",\'default message\')}}';
  const expectedLocales = {"test": "default message"};
  t.deepEqual(parser.extractLocales(string), expectedLocales);
});
test(t => {
  const string = '\n            const message = this.$t(\n"Warning",\n"This is deprecated and will be removed in {dayBeforeRemoval} !",\n    {dayBeforeRemoval});\n\n';
  const expectedLocales = {"Warning": "This is deprecated and will be removed in {dayBeforeRemoval} !"};
  t.deepEqual(parser.extractLocales(string), expectedLocales);
});
test(t => {
  const string = '<span>{{$t("test")}}</span><span>{{$t("test2")}}</span>';
  const expectedLocales = {"test": "test", "test2": "test2"};
  t.deepEqual(parser.extractLocales(string), expectedLocales);
});
