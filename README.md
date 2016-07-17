# pre-commit ESLint Hook

This is a hook to allow [pre-commit](http://pre-commit.com) to reorder ES6 JavaScript import statements.

### Installing

Add this to your `.pre-commit-config.yaml`:

```
-   repo: git://github.com/magicmark/pre-commit-es6-imports-reorder
    sha: b6a4e3077f02834735c077e6ea9e6449e089f3c8
    hooks:
    -   id: reorder-es6-imports
```
