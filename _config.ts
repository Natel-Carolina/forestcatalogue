import lume from 'lume/mod.ts';
import jsx from 'lume/plugins/jsx_preact.ts';
import postcss from 'lume/plugins/postcss.ts';
import basePath from 'lume/plugins/base_path.ts';
import sitemap from 'lume/plugins/sitemap.ts';
import terser from 'lume/plugins/terser.ts';

const site = lume({
  src: './src',
});

site.use(jsx()).use(postcss()).use(basePath()).use(terser()).use(sitemap());

export default site;
