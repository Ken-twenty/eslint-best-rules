module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
  ],
  rules: {
    /**
     * Possible Errors (34)
     */

    // 禁止反向的 for 循环计数器
    // 'for-direction': 'error',

    // 禁止在 getter 中省略 return 语句，并且返回 undefined 不能单独使用 return 隐式返回
    // 'getter-return': ['error', { allowImplicit: true }],

    // 禁止在循环体中使用 await
    // 'no-await-in-loop': 'error',

    // 禁止与 -0 作对比
    // 'no-compare-neg-zero': 'error',

    // 禁止在条件语句中使用赋值操作符
    // 'no-cond-assign': ['error', 'always'],

    // 只在开发环境中使用 console （BY NUFRONT）
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',

    // 禁止在条件语句中使用常量 （BY NUFRONT）
    'no-constant-condition': 'error',

    // 禁止在正则表达式中使用控制字符
    // 'no-control-regex': 'error',

    // 只在开发环境中使用 debugger
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',

    // 禁止在 function 定义中使用重名参数
    // 'no-dupe-args': 'error',

    // 禁止对象字面量中使用重复的键
    // 'no-dupe-keys': 'error',

    // 禁止使用重复的 case 标签
    // 'no-duplicate-case': 'error',

    // 禁止使用空的代码块 （BY NUFRONT）
    'no-empty': ['error', { allowEmptyCatch: false }],

    // 禁止在正则表达式中使用空字符集
    // 'no-empty-character-class': 'error',

    // 禁止对 catch 子句的参数重新赋值
    // 'no-ex-assign': 'error',

    // 禁止不必要的布尔转换
    // 'no-extra-boolean-cast': 'error',

    // 禁止不必要的括号 [必要情况下可增加代码可读性] （BY NUFRONT）
    'no-extra-parens': 'off',

    // 禁用不必要的分号
    // 'no-extra-semi': 'error',

    // 禁止对 function 变量重新赋值
    // 'no-func-assign': 'error',

    // 禁止在嵌套的块中出现 var 变量声明或 function 声明 （BY NUFRONT）
    'no-inner-declarations': ['error', 'both'],

    // 禁止 RegExp 构造函数中存在无效的正则表达式字符串
    // 'no-invalid-regexp': 'error',

    // 禁止不规则的空白 （无意义的）
    // 'no-irregular-whitespace': 'error',

    // 禁止将全局对象当作函数进行调用  （Math, JSON, Reflect）
    // 'no-obj-calls': 'error',

    // 禁止直接调用 Object.prototypes 的内置属性
    // 'no-prototype-builtins': 'error',

    // 禁止正则表达式字面量中出现多个空格
    // 'no-regex-spaces': 'error',

    // 禁用使用稀疏数组 （ , 前面没有任何元素）
    // 'no-sparse-arrays': 'error',

    // 禁止在常规字符串中出现模板字面量占位符语法
    // 'no-template-curly-in-string': 'error',

    // 禁止使用令人困惑的多行表达式
    // 'no-unexpected-multiline': 'error',

    // 禁止在 return、throw、continue 和 break 语句之后出现不可达代码
    // 'no-unreachable': 'error',

    // 禁止在 finally 语句块中直接使用控制流语句 return、throw、break 和 continue （但可以在 class 和 function 中间接使用）
    // 'no-unsafe-finally': 'error',

    // 禁止对关系运算符 in 和 instanceof 的左操作数使用否定操作符
    // 'no-unsafe-negation': 'error',

    // 禁止与 NaN 的比较，要求使用 isNaN() 检查 NaN
    // 'use-isnan': 'error',

    // 强制使用有效的 JSDoc 注释 （影响开发效率）
    // 'valid-jsdoc': 'off',

    /**
     * 强制 typeof 表达式与有效的字符串字面量或其它 typeof 表达式进行比较
     * （"undefined"、"object"、"boolean"、"number"、"string"、"function" 和 "symbol"）
     */
    // 'valid-typeof': ['error', { requireStringLiterals: true }],

    /**
     * Best Practices (70)
     */

    // 强制 getter 和 setter 在对象中成对出现 （不一定）
    // 'accessor-pairs': 'off',

    // 强制数组方法的回调函数中有 return 语句，并且不能单独使用 return 隐式返回 undefined （BY NUFRONT）
    'array-callback-return': ['error', { allowImplicit: false }],

    // 强制把变量的使用限制在其定义的作用域范围内
    // 'block-scoped-var': 'error',

    // 强制类方法使用 this
    // 'class-methods-use-this': ['error', {
    //   exceptMethods: [],
    // }],

    // 指定程序中允许的最大环路复杂度 （BY NUFRONT）
    complexity: 'off',

    // 强制 return 语句要么总是指定返回的值，要么不指定 （BY NUFRONT）
    'consistent-return': ['error', { 'treatUndefinedAsUnspecified': false }],

    // 强制所有控制语句使用一致的括号风格 （BY NUFRONT）
    curly: 'error',

    // 强制 Switch 语句中有 Default 分支 （使用 /^no default$/ 注释可以规避报错）
    // 'default-case': ['error', { commentPattern: '^no default$' }],

    // 强制在点号之前或之后一致的换行 （之前）
    // 'dot-location': ['error', 'property'],

    // 强制使用点号调用对象成员，关键字除外 （BY NUFRONT）
    'dot-notation': ['error', { allowKeywords: false }],

    // 强制使用 === 和 !== （null 除外）
    // eqeqeq: ['error', 'always', { null: 'ignore' }],

    // 强制 for-in 循环中有一个 if 语句进行约束
    // 'guard-for-in': 'error',

    // 不建议使用 alert、confirm 和 prompt
    // 'no-alert': 'warn',

    // 禁止使用 arguments.caller 或 arguments.callee
    // 'no-caller': 'error',

    // 禁止在 case 子句中使用词法声明 （case 的 {} 代码块中允许）
    // 'no-case-declarations': 'error',

    // 禁止除法操作符显式的出现在正则表达式开始的位置 （BY NUFRONT）
    'no-div-regex': 'error',

    // 禁止 if 语句中 return 语句之后有 else  块 （同样不允许 else if 块）
    // 'no-else-return': ['error', { allowElseIf: false }],

    // 禁止出现空函数 （BY NUFRONT）
    'no-empty-function': ['error', { allow: [] }],

    // 禁止使用空解构模式
    // 'no-empty-pattern': 'error',

    // 禁止与 null 进行值比较 （BY NUFRONT）
    'no-eq-null': 'error',

    // 禁用 eval() （BY NUFRONT）
    'no-eval': ['error', { 'allowIndirect': false }],

    // 禁止扩展原生对象
    // 'no-extend-native': 'error',

    // 禁止不必要的 .bind() 调用
    // 'no-extra-bind': 'error',

    // 禁止使用不必要的标签
    // 'no-extra-label': 'error',

    // 禁止 case 语句落空 （省略 break）
    // 'no-fallthrough': 'error',

    // 禁止在数字字面量中使用前导和末尾小数点
    // 'no-floating-decimal': 'error',

    // 禁止对原生对象或只读的全局对象进行赋值 （BY NUFRONT）
    'no-global-assign': 'error',

    // 禁止使用较短的符号实现类型转换 （BY NUFRONT）
    'no-implicit-coercion': ['error', {
      boolean: false,
      number: true,
      string: true,
      allow: [],
    }],

    // 禁止在全局作用域下隐式声明全局变量和全局函数 （BY NUFRONT）
    'no-implicit-globals': 'error',

    // 禁止使用隐式的 eval() （setTimeout, setInterval, execScript）
    // 'no-implied-eval': 'error',

    // 禁止使用无效的 this （BY NUFRONT）
    'no-invalid-this': 'error',

    // 禁止使用废弃的 __iterator__ 属性
    // 'no-iterator': 'error',

    // 禁止使用标签语句 （BY NUFRONT）
    'no-labels': 'error',

    // 禁止使用无意义的代码块 （{}）
    // 'no-lone-blocks': 'error',

    // 禁止在循环中出现 function 声明和表达式
    // 'no-loop-func': 'error',

    // 禁止使用难以阅读的字面量数字 （BY NUFRONT）
    'no-magic-numbers': 'off',

    // 禁止使用多个空格
    // 'no-multi-spaces': ['error', {
    //   ignoreEOLComments: false,
    // }],

    // 禁止使用 \ 连接的多行字符串
    // 'no-multi-str': 'error',

    // 禁止单独使用 new 而不把实例赋值给一个变量的操作
    // 'no-new': 'error',

    // 禁止对 Function 对象使用 new 操作符创建函数
    // 'no-new-func': 'error',

    // 禁止对 String，Number 和 Boolean 使用 new 操作符
    // 'no-new-wrappers': 'error',

    // 禁止使用八进制字面量
    // 'no-octal': 'error',

    // 禁止在字符串中使用八进制转义序列
    // 'no-octal-escape': 'error',

    // 禁止对函数参数再赋值 （BY NUFRONT）
    'no-param-reassign': ['error', {
      props: true,
      ignorePropertyModificationsFor: []
    }],

    // 禁止使用 __proto__ 属性
    // 'no-proto': 'error',

    // 禁止重新声明变量 （BY NUFRONT）
    'no-redeclare': ['error', { 'builtinGlobals': true }],

    // 禁止使用某些不被建议的对象属性
    // 'no-restricted-properties': ['error', {
    //   object: 'arguments',
    //   property: 'callee',
    //   message: 'arguments.callee is deprecated',
    // }, {
    //   object: 'global',
    //   property: 'isFinite',
    //   message: 'Please use Number.isFinite instead',
    // }, {
    //   object: 'self',
    //   property: 'isFinite',
    //   message: 'Please use Number.isFinite instead',
    // }, {
    //   object: 'window',
    //   property: 'isFinite',
    //   message: 'Please use Number.isFinite instead',
    // }, {
    //   object: 'global',
    //   property: 'isNaN',
    //   message: 'Please use Number.isNaN instead',
    // }, {
    //   object: 'self',
    //   property: 'isNaN',
    //   message: 'Please use Number.isNaN instead',
    // }, {
    //   object: 'window',
    //   property: 'isNaN',
    //   message: 'Please use Number.isNaN instead',
    // }, {
    //   property: '__defineGetter__',
    //   message: 'Please use Object.defineProperty instead.',
    // }, {
    //   property: '__defineSetter__',
    //   message: 'Please use Object.defineProperty instead.',
    // }, {
    //   object: 'Math',
    //   property: 'pow',
    //   message: 'Use the exponentiation operator (**) instead.',
    // }],

    // 禁止在 return 语句中使用赋值语句
    // 'no-return-assign': ['error', 'always'],

    // 禁止使用不必要的 return await
    // 'no-return-await': 'error',

    // 禁止使用 javascript: url
    // 'no-script-url': 'error',

    // 禁止自我赋值，包括属性 （BY NUFRONT）
    'no-self-assign': ['error', {
      props: true,
    }],

    // 禁止与自身比较
    // 'no-self-compare': 'error',

    // 禁止使用逗号操作符 （for 或者 明确的括号包裹除外）
    // 'no-sequences': 'error',

    // 禁止抛出字面量异常
    // 'no-throw-literal': 'error',

    // 禁止使用一成不变的循环条件
    'no-unmodified-loop-condition': 'error',

    // 禁止出现未使用过的表达式
    // 'no-unused-expressions': ['error', {
    //   allowShortCircuit: false,
    //   allowTernary: false,
    //   allowTaggedTemplates: false,
    // }],

    // 禁止出现未使用过的标
    // 'no-unused-labels': 'error',

    // 禁止不必要的 .call() 和 .apply() （BY NUFRONT）
    'no-useless-call': 'error',

    // 禁止不必要的字符串字面量或模板字面量的连接
    // 'no-useless-concat': 'error',

    // 禁止使用不必要的转义字符
    // 'no-useless-escape': 'error',

    // 禁止多余的 return 语句
    // 'no-useless-return': 'error',

    // 禁止使用 void 操作符
    // 'no-void': 'error',

    // 禁用警告注释 （BY NUFRONT）
    'no-warning-comments': ['error', {
      terms: [
        'todo',
        'fixme',
      ],
      location: 'start'
    }],

    // 禁止使用 with 语句
    // 'no-with': 'error',

    // 强制使用 Error 实例作为 Promise 拒绝的原因
    // 'prefer-promise-reject-errors': ['error', { allowEmptyReject: true }],

    // 强制在 parseInt() 中使用基数参数
    // radix: 'error',

    // 禁止使用不带 await 表达式的 async 函数 （不一定）
    // 'require-await': 'off',

    // 强制要求所有的 var 声明出现在它们所在的作用域顶部
    // 'vars-on-top': 'error',

    // 强制使用括号把 IIFE 函数括起来 （BY NUFRONT）
    'wrap-iife': ['error', 'inside', { functionPrototypeMethods: true }],

    // 禁止字面量在前的比较语句
    // yoda: 'error'

    /**
     * Strict Mode
     */

    // 要求或禁止使用严格模式指令
    // strict: ['error', 'never']

    /**
     * Variables
     */

    // 强制或禁止在变量声明语句中初始化
    // 'init-declarations': 'off',

    /**
     * Code Style
     */

    // (BY NUFRONT)
    'linebreak-style': ['error', 'windows'],
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
};
