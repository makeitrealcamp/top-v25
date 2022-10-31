const express = require('express');

const app = express();

const me = {
  name: 'Cristian Moreno',
  age: 33,
  email: 'cristian.moreno@gmail.com',
  phone: '1234567890',
  address: '123 Main St',
  city: 'New York',
  headLine: 'Head of Mentors',
  links: [
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/khriztianmoreno/',
    },
    {
      name: 'GitHub',
      url: 'https://github.com/khriztianmoreno/',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/khriztianmoreno/',
    },
  ],
  website: 'https://khriztianmoreno.dev',
  skills: [
    {
      name: 'JavaScript',
      level: 'Advanced',
    },
    {
      name: 'React',
      level: 'Advanced',
    },
    {
      name: 'Node',
      level: 'Advanced',
    },
    {
      name: 'HTML',
      level: 'Advanced',
    },
  ]
}

app.get('/about', (req, res) => {
  const html = `<p>Our store has info for 4 products</p><p>${new Date()}</p>`
  res.json(me);
});

app.listen(8080, () => {
  console.log('Server is running on port 8080');
});
