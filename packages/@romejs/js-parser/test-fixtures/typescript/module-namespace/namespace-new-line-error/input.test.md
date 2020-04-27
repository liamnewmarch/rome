# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test packages/@romejs/js-parser/index.test.ts --update-snapshots` to update.

## `typescript > module-namespace > namespace-new-line-error`

```javascript
Program {
  comments: Array []
  corrupt: false
  directives: Array []
  filename: 'input.ts'
  hasHoistedVars: false
  interpreter: undefined
  mtime: undefined
  sourceType: 'module'
  syntax: Array ['ts']
  loc: Object {
    filename: 'input.ts'
    end: Object {
      column: 0
      index: 17
      line: 3
    }
    start: Object {
      column: 0
      index: 0
      line: 1
    }
  }
  diagnostics: Array [
    Object {
      origins: Array [Object {category: 'js-parser'}]
      description: Object {
        category: 'parse/js'
        message: PARTIAL_BLESSED_DIAGNOSTIC_MESSAGE {value: 'Expected a semicolon or a line terminator'}
      }
      location: Object {
        filename: 'input.ts'
        mtime: undefined
        sourceType: 'module'
        end: Object {
          column: 3
          index: 13
          line: 2
        }
        start: Object {
          column: 4
          index: 14
          line: 2
        }
      }
    }
  ]
  body: Array [
    ExpressionStatement {
      loc: Object {
        filename: 'input.ts'
        end: Object {
          column: 9
          index: 9
          line: 1
        }
        start: Object {
          column: 0
          index: 0
          line: 1
        }
      }
      expression: ReferenceIdentifier {
        name: 'namespace'
        loc: Object {
          filename: 'input.ts'
          end: Object {
            column: 9
            index: 9
            line: 1
          }
          start: Object {
            column: 0
            index: 0
            line: 1
          }
        }
      }
    }
    ExpressionStatement {
      loc: Object {
        filename: 'input.ts'
        end: Object {
          column: 3
          index: 13
          line: 2
        }
        start: Object {
          column: 0
          index: 10
          line: 2
        }
      }
      expression: ReferenceIdentifier {
        name: 'Foo'
        loc: Object {
          filename: 'input.ts'
          end: Object {
            column: 3
            index: 13
            line: 2
          }
          start: Object {
            column: 0
            index: 10
            line: 2
          }
        }
      }
    }
    BlockStatement {
      body: Array []
      directives: Array []
      loc: Object {
        filename: 'input.ts'
        end: Object {
          column: 6
          index: 16
          line: 2
        }
        start: Object {
          column: 4
          index: 14
          line: 2
        }
      }
    }
  ]
}
```