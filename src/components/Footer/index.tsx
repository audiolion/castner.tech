import React from 'react';
import { Text, Flex, Box } from 'rebass';
import { Link } from '../Link';

const footerLinks = [
  { name: 'Github', href: 'https://github.com/audiolion' },
  { name: 'Twitter', href: 'https://twitter.com/@ryan_castner' },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/ryan-castner-b38894113' },
];

export const Footer: React.SFC<{}> = () => (
  <Flex as="footer" justifyContent="center" flexWrap="wrap">
    {footerLinks.map(({ name, href }, idx) => (
      <Link
        key={idx}
        as="a"
        width={[1, 1, 1 / 3, 1 / 3]}
        my={2}
        href={href}
        target="_blank"
        rel="noopener"
      >
        <Text textAlign="center">{name}</Text>
      </Link>
    ))}
    <Box mt={4}>
      <Text textAlign="center">&copy; {new Date().getFullYear()}, Ryan Castner</Text>
    </Box>
  </Flex>
);
