const restrictedGlobals = require('eslint-restricted-globals');

module.exports = {
  root: true,
  env: { node: true },
  extends: ['plugin:vue/essential', '@vue/airbnb'],
  rules: {
    /**
     * Possible Errors (34)
     */

    // 禁止反向的 for 循环计数器
    'for-direction': 'error',

    // 禁止在 getter 中省略 return 语句，并且返回 undefined 不能单独使用 return 隐式返回
    'getter-return': ['error', { allowImplicit: true }],

    // 禁止在循环体中使用 await
    'no-await-in-loop': 'error',

    // 禁止与 -0 作对比
    'no-compare-neg-zero': 'error',

    // 禁止在条件语句中使用赋值操作符
    'no-cond-assign': ['error', 'always'],

    // 只在开发环境中使用 console
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',

    // 禁止在条件语句中使用常量
    'no-constant-condition': 'error',

    // 禁止在正则表达式中使用控制字符
    'no-control-regex': 'error',

    // 只在开发环境中使用 debugger
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',

    // 禁止在 function 定义中使用重名参数
    'no-dupe-args': 'error',

    // 禁止对象字面量中使用重复的键
    'no-dupe-keys': 'error',

    // 禁止使用重复的 case 标签
    'no-duplicate-case': 'error',

    // 禁止使用空的代码块
    'no-empty': ['error', { allowEmptyCatch: false }],

    // 禁止在正则表达式中使用空字符集
    'no-empty-character-class': 'error',

    // 禁止对 catch 子句的参数重新赋值
    'no-ex-assign': 'error',

    // 禁止不必要的布尔转换
    'no-extra-boolean-cast': 'error',

    // 禁止不必要的括号 [必要情况下可增加代码可读性]
    'no-extra-parens': 'off',

    // 禁用不必要的分号
    'no-extra-semi': 'error',

    // 禁止对 function 变量重新赋值
    'no-func-assign': 'error',

    // 禁止在嵌套的块中出现 var 变量声明或 function 声明
    'no-inner-declarations': ['error', 'both'],

    // 禁止 RegExp 构造函数中存在无效的正则表达式字符串
    'no-invalid-regexp': 'error',

    // 禁止不规则的空白 （无意义的）
    'no-irregular-whitespace': 'error',

    // 禁止将全局对象当作函数进行调用  （Math, JSON, Reflect）
    'no-obj-calls': 'error',

    // 禁止直接调用 Object.prototypes 的内置属性
    'no-prototype-builtins': 'error',

    // 禁止正则表达式字面量中出现多个空格
    'no-regex-spaces': 'error',

    // 禁用使用稀疏数组 （ , 前面没有任何元素）
    'no-sparse-arrays': 'error',

    // 禁止在常规字符串中出现模板字面量占位符语法
    'no-template-curly-in-string': 'error',

    // 禁止使用令人困惑的多行表达式
    'no-unexpected-multiline': 'error',

    // 禁止在 return、throw、continue 和 break 语句之后出现不可达代码
    'no-unreachable': 'error',

    // 禁止在 finally 语句块中直接使用控制流语句 return、throw、break 和 continue （但可以在 class 和 function 中间接使用）
    'no-unsafe-finally': 'error',

    // 禁止对关系运算符 in 和 instanceof 的左操作数使用否定操作符
    'no-unsafe-negation': 'error',

    // 禁止与 NaN 的比较，要求使用 isNaN() 检查 NaN
    'use-isnan': 'error',

    // 强制使用有效的 JSDoc 注释 （影响开发效率）
    'valid-jsdoc': 'off',

    /**
     * 强制 typeof 表达式与有效的字符串字面量或其它 typeof 表达式进行比较
     * （'undefined'、'object'、'boolean'、'number'、'string'、'function' 和 'symbol'）
     */
    'valid-typeof': ['error', { requireStringLiterals: true }],

    /**
     * Best Practices (70)
     */

    // 强制 getter 和 setter 在对象中成对出现 （不一定）
    'accessor-pairs': 'off',

    // 强制数组方法的回调函数中有 return 语句，并且不能单独使用 return 隐式返回 undefined
    'array-callback-return': ['error', { allowImplicit: false }],

    // 强制把变量的使用限制在其定义的作用域范围内
    'block-scoped-var': 'error',

    // 强制类方法使用 this
    'class-methods-use-this': 'error',

    // 指定程序中允许的最大环路复杂度
    complexity: 'off',

    // 强制 return 语句要么总是指定返回的值，要么不指定
    'consistent-return': ['error', { treatUndefinedAsUnspecified: false }],

    // 强制所有控制语句使用一致的括号风格
    curly: ['error', 'all'],

    // 强制 Switch 语句中有 Default 分支 （使用 /^no default$/ 注释可以规避报错）
    'default-case': ['error', { commentPattern: '^no default$' }],

    // 强制在点号之前或之后一致的换行 （之前）
    'dot-location': ['error', 'property'],

    // 强制使用点号调用对象成员，关键字除外
    'dot-notation': ['error', { allowKeywords: false }],

    // 强制使用 === 和 !== （null 除外）
    eqeqeq: [
      'error',
      'always',
      { null: 'ignore' },
    ],

    // 强制 for-in 循环中有一个 if 语句进行约束
    'guard-for-in': 'error',

    // 不建议使用 alert、confirm 和 prompt
    'no-alert': 'warn',

    // 禁止使用 arguments.caller 或 arguments.callee
    'no-caller': 'error',

    // 禁止在 case 子句中使用词法声明 （case 的 {} 代码块中允许）
    'no-case-declarations': 'error',

    // 禁止除法操作符显式的出现在正则表达式开始的位置
    'no-div-regex': 'error',

    // 禁止 if 语句中 return 语句之后有 else  块 （同样不允许 else if 块）
    'no-else-return': ['error', { allowElseIf: false }],

    // 禁止出现空函数
    'no-empty-function': ['error', { allow: [] }],

    // 禁止使用空解构模式
    'no-empty-pattern': 'error',

    // 禁止与 null 进行值比较
    'no-eq-null': 'error',

    // 禁用 eval()
    'no-eval': ['error', { allowIndirect: false }],

    // 禁止扩展原生对象
    'no-extend-native': 'error',

    // 禁止不必要的 .bind() 调用
    'no-extra-bind': 'error',

    // 禁止使用不必要的标签
    'no-extra-label': 'error',

    // 禁止 case 语句落空 （省略 break）
    'no-fallthrough': 'error',

    // 禁止在数字字面量中使用前导和末尾小数点
    'no-floating-decimal': 'error',

    // 禁止对原生对象或只读的全局对象进行赋值
    'no-global-assign': 'error',

    // 禁止使用较短的符号实现类型转换
    'no-implicit-coercion': [
      'error',
      {
        boolean: false,
        number: true,
        string: true,
        allow: [],
      },
    ],

    // 禁止在全局作用域下隐式声明全局变量和全局函数
    'no-implicit-globals': 'error',

    // 禁止使用隐式的 eval() （setTimeout, setInterval, execScript）
    'no-implied-eval': 'error',

    // 禁止使用无效的 this
    'no-invalid-this': 'error',

    // 禁止使用废弃的 __iterator__ 属性
    'no-iterator': 'error',

    // 禁止使用标签语句
    'no-labels': 'error',

    // 禁止使用无意义的代码块 （{}）
    'no-lone-blocks': 'error',

    // 禁止在循环中出现 function 声明和表达式
    'no-loop-func': 'error',

    // 禁止使用难以阅读的字面量数字
    'no-magic-numbers': 'off',

    // 禁止使用多个空格
    'no-multi-spaces': ['error', { ignoreEOLComments: false }],

    // 禁止使用 \ 连接的多行字符串
    'no-multi-str': 'error',

    // 禁止单独使用 new 而不把实例赋值给一个变量的操作
    'no-new': 'error',

    // 禁止对 Function 对象使用 new 操作符创建函数
    'no-new-func': 'error',

    // 禁止对 String，Number 和 Boolean 使用 new 操作符
    'no-new-wrappers': 'error',

    // 禁止使用八进制字面量
    'no-octal': 'error',

    // 禁止在字符串中使用八进制转义序列
    'no-octal-escape': 'error',

    // 禁止对函数参数再赋值
    'no-param-reassign': [
      'error',
      {
        props: true,
        ignorePropertyModificationsFor: [],
      },
    ],

    // 禁止使用 __proto__ 属性
    'no-proto': 'error',

    // 禁止重新声明变量
    'no-redeclare': ['error', { builtinGlobals: true }],

    // 禁止使用某些不被建议的对象属性
    'no-restricted-properties': [
      'error',
      {
        object: 'arguments',
        property: 'callee',
        message: 'arguments.callee is deprecated',
      },
      {
        object: 'global',
        property: 'isFinite',
        message: 'Please use Number.isFinite instead',
      },
      {
        object: 'self',
        property: 'isFinite',
        message: 'Please use Number.isFinite instead',
      },
      {
        object: 'window',
        property: 'isFinite',
        message: 'Please use Number.isFinite instead',
      },
      {
        object: 'global',
        property: 'isNaN',
        message: 'Please use Number.isNaN instead',
      },
      {
        object: 'self',
        property: 'isNaN',
        message: 'Please use Number.isNaN instead',
      },
      {
        object: 'window',
        property: 'isNaN',
        message: 'Please use Number.isNaN instead',
      },
      {
        property: '__defineGetter__',
        message: 'Please use Object.defineProperty instead.',
      },
      {
        property: '__defineSetter__',
        message: 'Please use Object.defineProperty instead.',
      },
      {
        object: 'Math',
        property: 'pow',
        message: 'Use the exponentiation operator (**) instead.',
      },
    ],

    // 禁止在 return 语句中使用赋值语句
    'no-return-assign': ['error', 'always'],

    // 禁止使用不必要的 return await
    'no-return-await': 'error',

    // 禁止使用 javascript: url
    'no-script-url': 'error',

    // 禁止自我赋值，包括属性
    'no-self-assign': ['error', { props: true }],

    // 禁止与自身比较
    'no-self-compare': 'error',

    // 禁止使用逗号操作符 （for 或者 明确的括号包裹除外）
    'no-sequences': 'error',

    // 禁止抛出字面量异常
    'no-throw-literal': 'error',

    // 禁止使用一成不变的循环条件
    'no-unmodified-loop-condition': 'error',

    // 禁止出现未使用过的表达式
    'no-unused-expressions': [
      'error',
      {
        allowShortCircuit: false,
        allowTernary: false,
        allowTaggedTemplates: false,
      },
    ],

    // 禁止出现未使用过的标
    'no-unused-labels': 'error',

    // 禁止不必要的 .call() 和 .apply()
    'no-useless-call': 'error',

    // 禁止不必要的字符串字面量或模板字面量的连接
    'no-useless-concat': 'error',

    // 禁止使用不必要的转义字符
    'no-useless-escape': 'error',

    // 禁止多余的 return 语句
    'no-useless-return': 'error',

    // 禁止使用 void 操作符
    'no-void': 'error',

    // 禁用警告注释
    'no-warning-comments': [
      'error',
      {
        terms: ['todo', 'fixme'],
        location: 'start',
      },
    ],

    // 禁止使用 with 语句
    'no-with': 'error',

    // 强制使用 Error 实例作为 Promise 拒绝的原因
    'prefer-promise-reject-errors': ['error', { allowEmptyReject: true }],

    // 强制在 parseInt() 中使用基数参数
    radix: 'error',

    // 禁止使用不带 await 表达式的 async 函数 （不一定）
    'require-await': 'off',

    // 强制要求所有的 var 声明出现在它们所在的作用域顶部
    'vars-on-top': 'error',

    // 强制使用括号把 IIFE 函数括起来
    'wrap-iife': [
      'error',
      'inside',
      { functionPrototypeMethods: true },
    ],

    // 禁止字面量在前的比较语句
    yoda: 'error',

    /**
     * Strict Mode
     */

    // 要求或禁止使用严格模式指令
    strict: ['error', 'never'],

    /**
     * Variables (12)
     */

    // 强制或禁止在变量声明语句中初始化
    'init-declarations': 'off',

    // 禁止 catch 子句的参数与外层作用域中的变量同名
    'no-catch-shadow': 'error',

    // 禁止 delete 变量
    'no-delete-var': 'error',

    // 禁止标签与变量同名
    'no-label-var': 'error',

    // 禁止使用特定的全局变量
    'no-restricted-globals': [
      'error',
      'isFinite',
      'isNaN',
    ].concat(restrictedGlobals),

    // 禁止变量声明与外层作用域的变量同名
    'no-shadow': [
      'error',
      {
        builtinGlobals: true,
        hoist: 'all',
        allow: [],
      },
    ],

    // 禁止重定义关键字
    'no-shadow-restricted-names': 'error',

    // 禁用未声明的变量，除非它们在 /*global */ 注释中被提到
    'no-undef': ['error', { typeof: true }],

    // 禁止将变量初始化为 undefined
    'no-undef-init': 'error',

    // 禁止使用 undefined
    'no-undefined': 'off',

    // 禁止出现未使用过的变量
    'no-unused-vars': [
      'error',
      {
        vars: 'all',
        args: 'all',
        ignoreRestSiblings: false,
        caughtErrors: 'none',
      },
    ],

    // 禁止在变量定义之前使用它们
    'no-use-before-define': [
      'error',
      {
        functions: true,
        classes: true,
        variables: true,
      },
    ],

    /**
     * Node.js and CommonJS (11)
     */

    // 强制返回 callback 函数
    'callback-return': 'off',

    // 强制要求 require() 出现在模块作用域中的顶层
    'global-require': 'error',

    // 强制要求回调函数中有调用 err 参数的容错处理
    'handle-callback-err': 'off',

    // 禁止使用 Buffer() 构造函数
    'no-buffer-constructor': 'error',

    // 禁止 require 调用与普通变量声明混合使用
    'no-mixed-requires': [
      'error',
      {
        grouping: true,
        allowCall: true,
      },
    ],

    // 禁止调用 require 时使用 new 操作符
    'no-new-require': 'error',

    // 禁止对 __dirname 和 __filename 进行字符串连接
    'no-path-concat': 'error',

    // 禁止使用 process.env
    'no-process-env': 'off',

    // 禁止使用 process.exit()
    'no-process-exit': 'off',

    // 禁止使用特定的 Node.js 模块
    'no-restricted-modules': 'off',

    // 禁止使用同步方法
    'no-sync': 'off',

    /**
     * Stylistic Issues (90)
     */

    // 强制在数组开括号后和闭括号前换行
    'array-bracket-newline': [
      'error',
      {
        multiline: true,
        minItems: 3,
      },
    ],

    // 强制数组方括号旁使用一致的空格
    'array-bracket-spacing': ['error', 'never'],

    // 强制数组元素间出现换行
    'array-element-newline': [
      'error',
      {
        multiline: true,
        minItems: 3,
      },
    ],

    // 禁止或强制在代码块中开括号前和闭括号后有空格
    'block-spacing': ['error', 'always'],

    // 强制大括号风格
    'brace-style': [
      'error',
      '1tbs',
      { allowSingleLine: true },
    ],

    // 强制使用骆驼命名法
    camelcase: ['error', { properties: 'always' }],

    // 强制或禁止对注释的第一个字母大写
    'capitalized-comments': 'off',

    // 强制使用或禁止使用拖尾逗号
    'comma-dangle': [
      'error',
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'always-multiline',
      },
    ],

    // 强制在逗号周围使用空格
    'comma-spacing': [
      'error',
      {
        before: false,
        after: true,
      },
    ],

    // 强制逗号放置在行末
    'comma-style': ['error', 'last'],

    // 禁止在计算属性中使用空格
    'computed-property-spacing': ['error', 'never'],

    // 强制使用一致的 this 别名
    'consistent-this': ['error', 'that'],

    // 强制要求文件末尾保留一行空行
    'eol-last': ['error', 'always'],

    // 禁止在函数标识符和其调用之间有空格
    'func-call-spacing': ['error', 'never'],

    // 强制要求函数名与赋值给它们的变量名或属性名相匹配
    'func-name-matching': 'off',

    // 强制要求函数表达式具名
    'func-names': ['error', 'as-needed'],

    // 强制使用函数声明式或函数表达式
    'func-style': 'off',

    // 强制在函数括号内使用一致的换行
    'function-paren-newline': ['error', 'consistent'],

    // 禁止使用指定的标识符
    'id-blacklist': 'off',

    // 强制标识符的最大和最小长度
    'id-length': 'off',

    // 强制要求标识符匹配特定的正则表达式
    'id-match': 'off',

    // 强制隐式返回的箭头函数体的位置
    'implicit-arrow-linebreak': ['error', 'beside'],

    // 强制使用一致的缩进
    indent: [
      'error',
      2,
      {
        SwitchCase: 1,
        VariableDeclarator: 1,
        outerIIFEBody: 1,
        MemberExpression: 1,
        FunctionDeclaration: {
          parameters: 1,
          body: 1,
        },
        FunctionExpression: {
          parameters: 1,
          body: 1,
        },
        CallExpression: { arguments: 1 },
        ArrayExpression: 1,
        ObjectExpression: 1,
        ImportDeclaration: 1,
        flatTernaryExpressions: false,

        // list derived from https://github.com/benjamn/ast-types/blob/HEAD/def/jsx.js
        ignoredNodes: [
          'JSXElement',
          'JSXElement > *',
          'JSXAttribute',
          'JSXIdentifier',
          'JSXNamespacedName',
          'JSXMemberExpression',
          'JSXSpreadAttribute',
          'JSXExpressionContainer',
          'JSXOpeningElement',
          'JSXClosingElement',
          'JSXText',
          'JSXEmptyExpression',
          'JSXSpreadChild',
        ],
        ignoreComments: false,
      },
    ],

    // 强制在 JSX 属性中一致地使用双引号或单引号
    'jsx-quotes': ['error', 'prefer-double'],

    // 强制在对象字面量的属性中键和值之间使用一致的间距
    'key-spacing': [
      'error',
      {
        beforeColon: false,
        afterColon: true,
        mode: 'strict',
      },
    ],

    // 强制关键字周围空格的一致性
    'keyword-spacing': ['error', {
      before: true,
      after: true
    }],

    // 强制行注释的位置
    'line-comment-position': [
      'error',
      {
        position: 'above',
        ignorePattern: '',
        applyDefaultIgnorePatterns: false,
      },
    ],

    // 强制使用一致的换行风格
    'linebreak-style': ['error', 'windows'],

    // 强制要求在注释周围有空行
    'lines-around-comment': [
      'error',
      {
        beforeBlockComment: true,
        afterBlockComment: false,
        beforeLineComment: true,
        afterLineComment: false,
        allowBlockStart: true,
        allowBlockEnd: false,
        allowObjectStart: true,
        allowObjectEnd: false,
        allowArrayStart: true,
        allowArrayEnd: false,
        allowClassStart: true,
        allowClassEnd: false,
        applyDefaultIgnorePatterns: false,
      },
    ],

    // 强制要求或禁止类成员之间出现空行
    'lines-between-class-members': [
      'error',
      'always',
      { exceptAfterSingleLine: false },
    ],

    // 强制块语句的最大可嵌套深度
    'max-depth': 'off',

    // 强制一行的最大长度
    'max-len': [
      'error',
      {
        code: 100,
        tabWidth: 4,
        comments: 100,
        ignoreComments: false,
        ignoreTrailingComments: false,
        ignoreUrls: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: false,
        ignoreRegExpLiterals: true,
      },
    ],

    // 强制文件的最大行数
    'max-lines': [
      'error',
      {
        max: 400,
        skipBlankLines: true,
        skipComments: true,
      },
    ],

    // 强制回调函数最大嵌套深度
    'max-nested-callbacks': 'off',

    // 强制函数定义中最大的参数个数
    'max-params': 'off',

    // 强制函数块中语句的最大数量
    'max-statements': 'off',

    // 强制每一行中所允许的最大语句数量
    'max-statements-per-line': ['error', { max: 1 }],

    // 强制对多行注释使用特定风格
    'multiline-comment-style': ['error', 'starred-block'],

    // 强制要求或禁止在三元操作数中间换行
    'multiline-ternary': ['error', 'always-multiline'],

    // 强制要求构造函数首字母大写
    'new-cap': [
      'error',
      {
        newIsCap: true,
        capIsNew: false,
        properties: false,
      },
    ],

    // 强制要求调用无参构造函数时带括号
    'new-parens': 'error',

    // 强制要求方法链中一行最多的调用
    'newline-per-chained-call': ['error', { ignoreChainWithDepth: 2 }],

    // 禁止使用 Array 构造函数
    'no-array-constructor': 'error',

    // 禁止使用按位操作符
    'no-bitwise': 'error',

    // 禁止使用 continue
    'no-continue': 'off',

    // 禁止使用内联注释
    'no-inline-comments': 'error',

    // 禁止 if 语句作为唯一语句出现在 else 语句块中
    'no-lonely-if': 'error',

    // 禁止混合使用不同的操作符
    'no-mixed-operators': [
      'error',
      {
      /*
       * the list of arthmetic groups disallows mixing `%` and `**`
       * with other arithmetic operators.
       */
        groups: [
          ['%', '**'],
          ['%', '+'],
          ['%', '-'],
          ['%', '*'],
          ['%', '/'],
          ['**', '+'],
          ['**', '-'],
          ['**', '*'],
          ['**', '/'],
          [
            '&',
            '|',
            '^',
            '~',
            '<<',
            '>>',
            '>>>',
          ],
          [
            '==',
            '!=',
            '===',
            '!==',
            '>',
            '>=',
            '<',
            '<=',
          ],
          ['&&', '||'],
          ['in', 'instanceof'],
        ],
        allowSamePrecedence: false,
      },
    ],

    // 禁止空格和 tab 混合使用
    'no-mixed-spaces-and-tabs': 'error',

    // 禁止连续赋值
    'no-multi-assign': 'error',

    // 禁止出现多行空行
    'no-multiple-empty-lines': [
      'error',
      {
        max: 2,
        maxEOF: 1,
        maxBOF: 0,
      },
    ],

    // 禁止使用否定表达式
    'no-negated-condition': 'off',

    // 禁止使用嵌套的三元表达式
    'no-nested-ternary': 'error',

    // 禁止使用 Object 构造函数
    'no-new-object': 'error',

    // 禁止使用一元操作符 ++ 和 --
    'no-plusplus': 'error',

    // 禁止使用特定的语法
    'no-restricted-syntax': [
      'error',
      {
        selector: 'ForInStatement',
        message: 'for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.',
      },
      {
        selector: 'ForOfStatement',
        message: 'iterators/generators require regenerator-runtime, which is too heavyweight for this guide to allow them. Separately, loops should be avoided in favor of array iterations.',
      },
      {
        selector: 'LabeledStatement',
        message: 'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.',
      },
      {
        selector: 'WithStatement',
        message: '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.',
      },
    ],

    // 禁止使用 tab
    'no-tabs': 'error',

    // 禁止使用三元操作符
    'no-ternary': 'off',

    // 禁止使用行尾空白
    'no-trailing-spaces': 'error',

    // 禁止标识符中有下划线
    'no-underscore-dangle': 'off',

    // 禁止使用不必要的三元操作符
    'no-unneeded-ternary': ['error', { defaultAssignment: false }],

    // 禁止属性前有空白
    'no-whitespace-before-property': 'error',

    // 强制单个语句的位置
    'nonblock-statement-body-position': 'off',

    // 强制大括号内换行符的一致性
    'object-curly-newline': [
      'error',
      {
        ObjectExpression: {
          multiline: true,
          minProperties: 3,
        },
        ObjectPattern: 'always',
        ImportDeclaration: {
          multiline: true,
          minProperties: 3,
        },
        ExportDeclaration: {
          multiline: true,
          minProperties: 3,
        },
      },
    ],

    // 强制在花括号中使用一致的空格
    'object-curly-spacing': ['error', 'always'],

    // 强制将对象的属性放在不同的行上
    'object-property-newline': ['error', { allowAllPropertiesOnSameLine: false }],

    // 强制函数中的变量在一起声明或分开声明
    'one-var': ['error', 'never'],

    // 强制要求或禁止在变量声明周围换行
    'one-var-declaration-per-line': ['error', 'always'],

    // 强制要求或禁止尽可能地简化赋值操作
    'operator-assignment': ['error', 'always'],

    // 强制操作符使用一致的换行符风格
    'operator-linebreak': [
      'error',
      'before',
      { overrides: { '=': 'none' } },
    ],

    // 强制要求或禁止块内填充
    'padded-blocks': ['error', 'always'],

    // 强制要求或禁止在语句间填充空行
    'padding-line-between-statements': [
      'error',
      {
        blankLine: 'always',
        prev: '*',
        next: 'case'
      },
      {
        blankLine: 'always',
        prev: '*',
        next: 'default'
      },
      {
        blankLine: 'always',
        prev: '*',
        next: 'return'
      }
    ],

    // 强制要求对象字面量属性名称用引号括起来
    'quote-props': [
      'error',
      'as-needed',
      {
        keywords: true,
        unnecessary: true,
        numbers: true
      }
    ],

    // 强制使用一致的反勾号、双引号或单引号
    quotes: [
      'error',
      'single',
      {
        avoidEscape: true,
        allowTemplateLiterals: true,
      }
    ],

    // 强制要求使用 JSDoc 注释
    'require-jsdoc': 'off',

    // 强制要求或禁止使用分号代替 ASI
    'semi': ['error', 'always'],

    // 强制分号之前和之后使用一致的空格
    'semi-spacing': ['error', { before: false, after: true }],

    // 强制分号的位置
    'semi-style': ['error', 'last'],

    // 强制要求对象属性按序排列
    'sort-keys': 'off',

    // 强制要求变量排序
    'sort-vars': 'off',

    // 强制要求或禁止语句块之前的空格
    'space-before-blocks': 'error',

    // 强制要求或禁止函数圆括号之前有一个空格
    'space-before-function-paren': ['error', {
      anonymous: 'always',
      named: 'never',
      asyncArrow: 'always'
    }],

    // 禁止或强制圆括号内的空格
    'space-in-parens': ['error', 'never'],

    // 强制要求中缀操作符周围有空格
    'space-infix-ops': 'error',
    
    // 强制要求或禁止在一元操作符之前或之后存在空格
    'space-unary-ops': ['error', {
      words: true,
      nonwords: false,
      overrides: {
      },
    }],

    // 强制要求或禁止在注释前有空白
    'spaced-comment': ['error', 'always'],

    // 强制要求在 switch 语句的冒号左右有空格
    'switch-colon-spacing': ['error', { after: true, before: false }],

    // 强制要求或禁止在模板标记和它们的字面量之间有空格 
    'template-tag-spacing': ['error', 'never'],

    // 强制要求或禁止使用 Unicode 字节顺序标记 (BOM)
    'unicode-bom': ['error', 'never'],

    // 强制要求正则表达式被包裹起来
    'wrap-regex': 'off',

    /**
     * ES6
     */

    // 强制要求箭头函数体使用大括号
    'arrow-body-style': ['error', 'as-needed', {
      requireReturnForObjectLiteral: true,
    }],

    // 强制要求箭头函数的参数使用圆括号
    'arrow-parens': ['error', 'always'],

    // 强制要求箭头函数的箭头之前或之后有空格
    'arrow-spacing': ['error', { before: true, after: true }],

    // 禁止构造函数中无效的 super() 的调用
    'constructor-super': 'error',

    // 强制 generator 函数中 * 号周围有空格
    'generator-star-spacing': ['error', 'before'],

    // 禁止修改类声明的变量
    'no-class-assign': 'error',

    // 禁止在可能与比较操作符相混淆的地方使用箭头函数
    'no-confusing-arrow': ['error', {
      allowParens: true,
    }],

    // 禁止改变用 const 声明的变量
    'no-const-assign': 'error',

    // 禁止类成员中有重复的名称
    'no-dupe-class-members': 'error',

    // 禁止重复导入
    'no-duplicate-imports': ['error', { includeExports: true }],

    // 禁止 Symbol 操作符和 new 一起使用
    'no-new-symbol': 'error',

    // 禁止 import 特定的模块
    'no-restricted-imports': 'off',

    // 禁止在构造函数中在调用 super() 之前使用 this 或 super
    'no-this-before-super': 'error',

    // 禁止在对象中使用不必要的计算属性
    'no-useless-computed-key': 'error',

    // 禁止使用不必要的构造函数
    'no-useless-constructor': 'error',

    // 禁止在 import 和 export 和解构赋值时将引用重命名为相同的名字
    'no-useless-rename': 'error',

    // 强制要求使用 let 或 const 而不是 var
    'no-var': 'error',

    // 强制要求对象字面量简写语法
    'object-shorthand': ['error', 'always', {
      avoidQuotes: true,
      ignoreConstructors: false,
      avoidExplicitReturnArrows: true,
    }],

    // 强制要求使用箭头函数作为回调
    'prefer-arrow-callback': ['error', {
      allowNamedFunctions: false,
      allowUnboundThis: true,
    }],

    // 强制建议使用 const
    'prefer-const': ['error', {
      destructuring: 'any',
      ignoreReadBeforeAssign: true,
    }],

    // 强制使用数组和对象解构
    'prefer-destructuring': [
      'error',
      {
        VariableDeclarator: {
          array: false,
          object: true,
        },
        AssignmentExpression: {
          array: true,
          object: true,
        },
      },
      {
        enforceForRenamedProperties: false,
      }
    ],
  },
  parserOptions: { parser: 'babel-eslint' },
};
