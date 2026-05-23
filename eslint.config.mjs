import nx from '@nx/eslint-plugin';

export default [
  ...nx.configs['flat/base'],
  ...nx.configs['flat/typescript'],
  ...nx.configs['flat/javascript'],
  {
    ignores: ['**/dist'],
  },
  {
    files: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx'],
    rules: {
      '@nx/enforce-module-boundaries': [
        'error',
        {
          enforceBuildableLibDependency: true,
          allow: ['^.*/eslint(\\.base)?\\.config\\.[cm]?[jt]s$'],
          depConstraints: [
            {
              sourceTag: 'scope:shell',
              onlyDependOnLibsWithTags: [
                'scope:explore',
                'scope:decide',
                'scope:checkout',
                'scope:shared',
                'scope:design-system',
              ],
            },
            {
              sourceTag: 'scope:explore',
              onlyDependOnLibsWithTags: ['scope:shared', 'scope:design-system'],
            },
            {
              sourceTag: 'scope:decide',
              onlyDependOnLibsWithTags: ['scope:shared', 'scope:design-system'],
            },
            {
              sourceTag: 'scope:checkout',
              onlyDependOnLibsWithTags: ['scope:shared', 'scope:design-system'],
            },
            {
              sourceTag: 'scope:design-system',
              onlyDependOnLibsWithTags: ['scope:shared'],
            },
            {
              sourceTag: 'scope:shared',
              onlyDependOnLibsWithTags: ['scope:shared'],
            },
          ],
        },
      ],
    },
  },
  {
    files: [
      '**/*.ts',
      '**/*.tsx',
      '**/*.cts',
      '**/*.mts',
      '**/*.js',
      '**/*.jsx',
      '**/*.cjs',
      '**/*.mjs',
    ],
    // Override or add rules here
    rules: {},
  },
];
