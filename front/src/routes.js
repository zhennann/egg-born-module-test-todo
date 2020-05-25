function load(name) {
  return require(`./pages/${name}.vue`).default;
}

export default [
  { path: 'testvue', component: load('testvue') },
  { path: 'test', component: load('test') },
  { path: 'test2', component: load('test2') },
  { path: 'testa', component: load('testa') },
  { path: 'testb', component: load('testb') },
  { path: 'testc', component: load('testc') },
  { path: 'testtreeview', component: load('testtreeview') },
];
