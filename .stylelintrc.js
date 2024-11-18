// 导出配置对象
module.exports = {
  // 继承 @umijs/max 提供的 stylelint 基础配置
  extends: require.resolve('@umijs/max/stylelint'),

  // 定义具体的规则
  rules: {
    // at-rule-no-unknown: 用于控制未知的 CSS @规则的检查
    'at-rule-no-unknown': [
      // true: 启用该规则的检查
      true,
      {
        // ignoreAtRules: 定义需要忽略检查的 @规则列表
        ignoreAtRules: [
          'tailwind', // 允许 @tailwind 指令
          'apply', // 允许 @apply 指令
          'variants', // 允许 @variants 指令
          'responsive', // 允许 @responsive 指令
          'screen', // 允许 @screen 指令
          'layer', // 允许 @layer 指令
          'mixin', // 允许 @mixin 指令 (Sass/Less)
          'include', // 允许 @include 指令 (Sass)
          'extend', // 允许 @extend 指令 (Sass)
        ],
      },
    ],
  },
};
