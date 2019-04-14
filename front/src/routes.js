function load(name) {
  return require(`./pages/${name}.vue`).default;
}

export default [
  { path: 'testvue', component: load('testvue') },
];
