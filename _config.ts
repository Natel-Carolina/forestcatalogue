import lume from 'lume/mod.ts';
import jsx from 'lume/plugins/jsx_preact.ts';
import postcss from 'lume/plugins/postcss.ts';

const site = lume({
  src: './src',
});

site.use(jsx()).use(postcss());

export default site;
