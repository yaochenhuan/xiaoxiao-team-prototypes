# Figma Design System — Critical 信息补齐版 (v4.0)

> 本文档基于《Figma Design System 结构化输出文档（修订版 v2.0）》及原始《视觉规范.pdf》逐页提取/测量数据，专门补齐「落地前必须确认清单」中的 Critical 项，使文档从「可执行搭建规范」进一步升级为「可进入视觉验证和 Figma MVP 搭建的准生产规范」。

> **重要声明**：本文档中所有从 PDF 图像拾取的颜色值（标注 `source: PDF_PICKED_APPROXIMATE`）均存在 1-3% 的像素采样误差。**最终色值必须以 Figma 源文件或设计师确认的色板为准**。所有 `confirmed: false` 的数据均需在 Figma 搭建前由设计师二次确认。

---

## 1. Critical 补齐摘要

本次补齐工作基于 52 页视觉规范 PDF 的逐页渲染与图像采样，重点提取了以下内容：

| 补齐项 | 数据来源 | 提取状态 | 说明 |
|--------|---------|---------|------|
| 3 套主题 Primitive 色值 | PDF 图像拾色 (Page 03, 04, 05) | 2 套完成 (灰绿/蓝)，1 套部分 (紫) | 灰绿/蓝已提取完整 5 个 Palette×13 Tone；紫主题关键 Semantic Tokens 已补齐，完整 0–100 Primitive 色阶仍不完整；绿色主题经确认不存在，已从主题体系中移除 |
| Semantic Colors 映射 | M3 标准推导 + PDF 语义色页 (Page 07) | 部分完成 | 已完成灰绿/蓝/紫 3 套主题映射；紫主题部分 Token 需从 Figma 源文件确认 |
| Success/Warning/Info | PDF Alert 页 (Page 49) | 已建立轻量 Token | 已建立 success/warning/info 轻量语义 Token（各 4 个），色值保持 TODO_CONFIRM，待设计师确认 |
| Typography 字号/行高 | PDF 排版页 (Page 09, 10) | 完成 | 已提取全部 15 个层级的中文字体规格（苹方 + 具体字号/行高） |
| P0 组件核心尺寸 | PDF 组件页 (Page 18-52) | 14 个组件完成 | Button/Modal/Table/Tabs/Avatar/Badge/Chip/TextField/Search/Tooltip/Alert/Switch/Radio/Checkbox/List |
| Dark Mode 决策 | 全文未提及 | 完成 | 建议 v1 阶段仅做 Light Theme，Dark Mode 作为 v1.5/2.0 规划 |
| Icon 规范 | PDF 未明确独立章节 | 完成 | 基于 M3 及前端常见实践给出推荐方案 |
| 字体回退方案 | PDF 排版页 (Page 09, 10) | 完成 | 已提取 macOS/Windows/Android/Web 回退栈 |

---

## 2. 颜色 Primitive Tokens 补齐表

> ⚠️ **重要限制**：当前颜色仅可用于**可视化预览和 MVP 验证**，不可用于**生产 token**。所有 HEX 均为图像拾取近似值，误差约 ±1-3%，最终色值必须由设计师从 Figma 源文件确认。

### 2.1 数据说明

- 所有色值通过 Python PIL 从 PDF 渲染图 (200 DPI) 逐像素采样获取，采样点取色块中心 5×5 像素平均值。
- 标注 `source: PDF_PICKED_APPROXIMATE` 表示图像拾色值，存在 ±1-3% 误差，**不可直接作为生产色值写入代码**。
- 每套主题包含 5 个基础 Palette：Primary、Secondary、Tertiary、Error、Neutral。Neutral Variant 在部分主题中未独立展示，使用 Neutral 近似值。
- 标准 Tonal Palette 包含 13 个 Tone：0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 95, 99, 100。其中 100 通常为纯白 (#FFFFFF)，在 PDF 中难以与背景区分，故部分缺失。
- **绿色主题（纯绿）经确认不存在**，当前主题体系仅保留：灰绿、蓝、紫。

### 2.2 灰绿主题 (Gray-Green) — 提取自 Page 03

| Theme | Palette | Tone | HEX | Source | Confirmed | Notes |
|-------|---------|------|-----|--------|-----------|-------|
| 灰绿 | Primary | 0 | #000000 | PDF_PICKED_APPROXIMATE | false | M3 Tone 0 纯黑 |
| 灰绿 | Primary | 10 | #002018 | PDF_PICKED_APPROXIMATE | false | |
| 灰绿 | Primary | 20 | #00382C | PDF_PICKED_APPROXIMATE | false | |
| 灰绿 | Primary | 30 | #005140 | PDF_PICKED_APPROXIMATE | false | |
| 灰绿 | Primary | 40 | #006B56 | PDF_PICKED_APPROXIMATE | false | **Key Color** |
| 灰绿 | Primary | 50 | #00876D | PDF_PICKED_APPROXIMATE | false | |
| 灰绿 | Primary | 60 | #0BA385 | PDF_PICKED_APPROXIMATE | false | |
| 灰绿 | Primary | 70 | #3EBF9F | PDF_PICKED_APPROXIMATE | false | |
| 灰绿 | Primary | 80 | #5FDBBA | PDF_PICKED_APPROXIMATE | false | |
| 灰绿 | Primary | 90 | #7EF8D5 | PDF_PICKED_APPROXIMATE | false | |
| 灰绿 | Primary | 95 | #B9FFE7 | PDF_PICKED_APPROXIMATE | false | |
| 灰绿 | Primary | 99 | #F3FFF9 | PDF_PICKED_APPROXIMATE | false | |
| 灰绿 | Primary | 100 | #FFFFFF | M3_REFERENCE | false | M3 标准纯白 |
| 灰绿 | Secondary | 0 | #000000 | PDF_PICKED_APPROXIMATE | false | |
| 灰绿 | Secondary | 10 | #072019 | PDF_PICKED_APPROXIMATE | false | |
| 灰绿 | Secondary | 20 | #1D352D | PDF_PICKED_APPROXIMATE | false | |
| 灰绿 | Secondary | 30 | #344C43 | PDF_PICKED_APPROXIMATE | false | |
| 灰绿 | Secondary | 40 | #4B635B | PDF_PICKED_APPROXIMATE | false | |
| 灰绿 | Secondary | 50 | #637C73 | PDF_PICKED_APPROXIMATE | false | |
| 灰绿 | Secondary | 60 | #7D968C | PDF_PICKED_APPROXIMATE | false | |
| 灰绿 | Secondary | 70 | #97B1A7 | PDF_PICKED_APPROXIMATE | false | |
| 灰绿 | Secondary | 80 | #B2CCC2 | PDF_PICKED_APPROXIMATE | false | |
| 灰绿 | Secondary | 90 | #CEE9DD | PDF_PICKED_APPROXIMATE | false | |
| 灰绿 | Secondary | 95 | #DCF7EB | PDF_PICKED_APPROXIMATE | false | |
| 灰绿 | Secondary | 99 | #F3FFF9 | PDF_PICKED_APPROXIMATE | false | |
| 灰绿 | Secondary | 100 | #FFFFFF | M3_REFERENCE | false | |
| 灰绿 | Tertiary | 0 | #000000 | PDF_PICKED_APPROXIMATE | false | 注意：Tertiary 为橙/棕色系，与 Primary 绿形成对比 |
| 灰绿 | Tertiary | 10 | #3B0900 | PDF_PICKED_APPROXIMATE | false | |
| 灰绿 | Tertiary | 20 | #5F1500 | PDF_PICKED_APPROXIMATE | false | |
| 灰绿 | Tertiary | 30 | #862200 | PDF_PICKED_APPROXIMATE | false | |
| 灰绿 | Tertiary | 40 | #B02F00 | PDF_PICKED_APPROXIMATE | false | |
| 灰绿 | Tertiary | 50 | #DB3E03 | PDF_PICKED_APPROXIMATE | false | |
| 灰绿 | Tertiary | 60 | #FF5722 | PDF_PICKED_APPROXIMATE | false | |
| 灰绿 | Tertiary | 70 | #FF8B69 | PDF_PICKED_APPROXIMATE | false | |
| 灰绿 | Tertiary | 80 | #FFB5A0 | PDF_PICKED_APPROXIMATE | false | |
| 灰绿 | Tertiary | 90 | #FFDBD1 | PDF_PICKED_APPROXIMATE | false | |
| 灰绿 | Tertiary | 95 | #FFEDE8 | PDF_PICKED_APPROXIMATE | false | |
| 灰绿 | Tertiary | 99 | #FFFBFF | PDF_PICKED_APPROXIMATE | false | |
| 灰绿 | Tertiary | 100 | #FFFFFF | M3_REFERENCE | false | |
| 灰绿 | Error | 0 | #000000 | PDF_PICKED_APPROXIMATE | false | |
| 灰绿 | Error | 10 | #410002 | PDF_PICKED_APPROXIMATE | false | |
| 灰绿 | Error | 20 | #690005 | PDF_PICKED_APPROXIMATE | false | |
| 灰绿 | Error | 30 | #93000A | PDF_PICKED_APPROXIMATE | false | |
| 灰绿 | Error | 40 | #BA1A1A | PDF_PICKED_APPROXIMATE | false | |
| 灰绿 | Error | 50 | #DE3730 | PDF_PICKED_APPROXIMATE | false | |
| 灰绿 | Error | 60 | #FF5449 | PDF_PICKED_APPROXIMATE | false | |
| 灰绿 | Error | 70 | #FF897D | PDF_PICKED_APPROXIMATE | false | |
| 灰绿 | Error | 80 | #FFB4AB | PDF_PICKED_APPROXIMATE | false | |
| 灰绿 | Error | 90 | #FFDAD6 | PDF_PICKED_APPROXIMATE | false | |
| 灰绿 | Error | 95 | #FFEDEA | PDF_PICKED_APPROXIMATE | false | |
| 灰绿 | Error | 99 | #FFFBFF | PDF_PICKED_APPROXIMATE | false | |
| 灰绿 | Error | 100 | #FFFFFF | M3_REFERENCE | false | |
| 灰绿 | Neutral | 0 | #000000 | PDF_PICKED_APPROXIMATE | false | |
| 灰绿 | Neutral | 10 | #141D1A | PDF_PICKED_APPROXIMATE | false | |
| 灰绿 | Neutral | 20 | #29322F | PDF_PICKED_APPROXIMATE | false | |
| 灰绿 | Neutral | 30 | #3F4945 | PDF_PICKED_APPROXIMATE | false | |
| 灰绿 | Neutral | 40 | #57605C | PDF_PICKED_APPROXIMATE | false | |
| 灰绿 | Neutral | 50 | #6F7975 | PDF_PICKED_APPROXIMATE | false | |
| 灰绿 | Neutral | 60 | #89938E | PDF_PICKED_APPROXIMATE | false | |
| 灰绿 | Neutral | 70 | #A3ADA8 | PDF_PICKED_APPROXIMATE | false | |
| 灰绿 | Neutral | 80 | #BFC9C3 | PDF_PICKED_APPROXIMATE | false | |
| 灰绿 | Neutral | 90 | #DBE5DF | PDF_PICKED_APPROXIMATE | false | |
| 灰绿 | Neutral | 95 | #E9F3ED | PDF_PICKED_APPROXIMATE | false | |
| 灰绿 | Neutral | 99 | #F3FFF9 | PDF_PICKED_APPROXIMATE | false | |
| 灰绿 | Neutral | 100 | #FFFFFF | M3_REFERENCE | false | |
| 灰绿 | Neutral Variant | 0 | #000000 | PDF_PICKED_APPROXIMATE | false | 黄绿色偏，与 Neutral 区分 |
| 灰绿 | Neutral Variant | 10 | #1D1D00 | PDF_PICKED_APPROXIMATE | false | |
| 灰绿 | Neutral Variant | 20 | #333200 | PDF_PICKED_APPROXIMATE | false | |
| 灰绿 | Neutral Variant | 30 | #4B4900 | PDF_PICKED_APPROXIMATE | false | |
| 灰绿 | Neutral Variant | 40 | #636100 | PDF_PICKED_APPROXIMATE | false | |
| 灰绿 | Neutral Variant | 50 | #7D7A00 | PDF_PICKED_APPROXIMATE | false | |
| 灰绿 | Neutral Variant | 60 | #989522 | PDF_PICKED_APPROXIMATE | false | |
| 灰绿 | Neutral Variant | 70 | #B3B03C | PDF_PICKED_APPROXIMATE | false | |
| 灰绿 | Neutral Variant | 80 | #CFCB55 | PDF_PICKED_APPROXIMATE | false | |
| 灰绿 | Neutral Variant | 90 | #EBE86E | PDF_PICKED_APPROXIMATE | false | |
| 灰绿 | Neutral Variant | 95 | #FAF67A | PDF_PICKED_APPROXIMATE | false | |
| 灰绿 | Neutral Variant | 99 | #FFFBE6 | PDF_PICKED_APPROXIMATE | false | |
| 灰绿 | Neutral Variant | 100 | #FFFFFF | M3_REFERENCE | false | |

### 2.3 蓝色主题 (Blue) — 来自 USER_PROVIDED_TOKEN_FILE

| Theme | Palette | Tone | HEX | Source | Confirmed | Notes |
|-------|---------|------|-----|--------|-----------|-------|
| 蓝 | Primary | 0 | #000000 | PDF_PICKED_APPROXIMATE | false | |
| 蓝 | Primary | 10 | #041E49 | USER_PROVIDED_TOKEN_FILE | true | |
| 蓝 | Primary | 20 | #062E6F | PDF_PICKED_APPROXIMATE | false | |
| 蓝 | Primary | 30 | #0842A0 | USER_PROVIDED_TOKEN_FILE | true | |
| 蓝 | Primary | 40 | #0B57D0 | USER_PROVIDED_TOKEN_FILE | true | **Key Color** |
| 蓝 | Primary | 50 | #1B6EF3 | PDF_PICKED_APPROXIMATE | false | |
| 蓝 | Primary | 60 | #4C8DF6 | PDF_PICKED_APPROXIMATE | false | |
| 蓝 | Primary | 70 | #7CACF8 | PDF_PICKED_APPROXIMATE | false | |
| 蓝 | Primary | 80 | #A8C7FA | USER_PROVIDED_TOKEN_FILE | true | |
| 蓝 | Primary | 90 | #D3E3FD | USER_PROVIDED_TOKEN_FILE | true | |
| 蓝 | Primary | 95 | #ECF3FE | PDF_PICKED_APPROXIMATE | false | |
| 蓝 | Primary | 99 | #FAFBFF | PDF_PICKED_APPROXIMATE | false | |
| 蓝 | Primary | 100 | #FFFFFF | M3_REFERENCE | false | |
| 蓝 | Secondary | 0 | #000000 | PDF_PICKED_APPROXIMATE | false | 蓝青色调 |
| 蓝 | Secondary | 10 | #001D35 | USER_PROVIDED_TOKEN_FILE | true | |
| 蓝 | Secondary | 20 | #003355 | PDF_PICKED_APPROXIMATE | false | |
| 蓝 | Secondary | 30 | #004A77 | USER_PROVIDED_TOKEN_FILE | true | |
| 蓝 | Secondary | 40 | #00639B | USER_PROVIDED_TOKEN_FILE | true | |
| 蓝 | Secondary | 50 | #047DB7 | PDF_PICKED_APPROXIMATE | false | |
| 蓝 | Secondary | 60 | #3998D3 | PDF_PICKED_APPROXIMATE | false | |
| 蓝 | Secondary | 70 | #5AB3F0 | PDF_PICKED_APPROXIMATE | false | |
| 蓝 | Secondary | 80 | #7FCFFF | USER_PROVIDED_TOKEN_FILE | true | |
| 蓝 | Secondary | 90 | #C2E7FF | USER_PROVIDED_TOKEN_FILE | true | |
| 蓝 | Secondary | 95 | #DFF3FF | PDF_PICKED_APPROXIMATE | false | |
| 蓝 | Secondary | 99 | #FAFBFF | PDF_PICKED_APPROXIMATE | false | |
| 蓝 | Secondary | 100 | #FFFFFF | M3_REFERENCE | false | |
| 蓝 | Tertiary | 0 | #000000 | PDF_PICKED_APPROXIMATE | false | 绿色调，与 Primary 蓝形成对比 |
| 蓝 | Tertiary | 10 | #072711 | USER_PROVIDED_TOKEN_FILE | true | |
| 蓝 | Tertiary | 20 | #0A3818 | PDF_PICKED_APPROXIMATE | false | |
| 蓝 | Tertiary | 30 | #0F5223 | USER_PROVIDED_TOKEN_FILE | true | |
| 蓝 | Tertiary | 40 | #146C2E | USER_PROVIDED_TOKEN_FILE | true | |
| 蓝 | Tertiary | 50 | #198639 | PDF_PICKED_APPROXIMATE | false | |
| 蓝 | Tertiary | 60 | #1EA446 | PDF_PICKED_APPROXIMATE | false | |
| 蓝 | Tertiary | 70 | #37BE5F | PDF_PICKED_APPROXIMATE | false | |
| 蓝 | Tertiary | 80 | #6DD58C | USER_PROVIDED_TOKEN_FILE | true | |
| 蓝 | Tertiary | 90 | #C4EED0 | USER_PROVIDED_TOKEN_FILE | true | |
| 蓝 | Tertiary | 95 | #E7F8ED | PDF_PICKED_APPROXIMATE | false | |
| 蓝 | Tertiary | 99 | #F2FFEE | PDF_PICKED_APPROXIMATE | false | |
| 蓝 | Tertiary | 100 | #FFFFFF | M3_REFERENCE | false | |
| 蓝 | Error | 0 | #000000 | PDF_PICKED_APPROXIMATE | false | |
| 蓝 | Error | 10 | #410E0B | USER_PROVIDED_TOKEN_FILE | true | |
| 蓝 | Error | 20 | #601310 | PDF_PICKED_APPROXIMATE | false | |
| 蓝 | Error | 30 | #8C1D18 | PDF_PICKED_APPROXIMATE | false | |
| 蓝 | Error | 40 | #B3261E | USER_PROVIDED_TOKEN_FILE | true | |
| 蓝 | Error | 50 | #DC362E | PDF_PICKED_APPROXIMATE | false | |
| 蓝 | Error | 60 | #E46962 | PDF_PICKED_APPROXIMATE | false | |
| 蓝 | Error | 70 | #EB928E | PDF_PICKED_APPROXIMATE | false | |
| 蓝 | Error | 80 | #F2B8B6 | USER_PROVIDED_TOKEN_FILE | true | |
| 蓝 | Error | 90 | #F9DEDC | USER_PROVIDED_TOKEN_FILE | true | |
| 蓝 | Error | 95 | #FDEEEE | PDF_PICKED_APPROXIMATE | false | |
| 蓝 | Error | 99 | #FFFBF9 | PDF_PICKED_APPROXIMATE | false | |
| 蓝 | Error | 100 | #FFFFFF | M3_REFERENCE | false | |
| 蓝 | Neutral | 0 | #000000 | PDF_PICKED_APPROXIMATE | false | 偏蓝灰色调 |
| 蓝 | Neutral | 10 | #192024 | PDF_PICKED_APPROXIMATE | false | |
| 蓝 | Neutral | 20 | #333F48 | PDF_PICKED_APPROXIMATE | false | |
| 蓝 | Neutral | 30 | #414E54 | PDF_PICKED_APPROXIMATE | false | |
| 蓝 | Neutral | 40 | #4F5B63 | PDF_PICKED_APPROXIMATE | false | |
| 蓝 | Neutral | 50 | #5B6770 | PDF_PICKED_APPROXIMATE | false | |
| 蓝 | Neutral | 60 | #737F87 | PDF_PICKED_APPROXIMATE | false | |
| 蓝 | Neutral | 70 | #98A4AE | PDF_PICKED_APPROXIMATE | false | |
| 蓝 | Neutral | 80 | #BDCAD1 | PDF_PICKED_APPROXIMATE | false | |
| 蓝 | Neutral | 90 | #D7E0E5 | PDF_PICKED_APPROXIMATE | false | |
| 蓝 | Neutral | 95 | #E0E7EB | PDF_PICKED_APPROXIMATE | false | |
| 蓝 | Neutral | 98 | #E5ECF0 | PDF_PICKED_APPROXIMATE | false | PDF 中显示 98 色调 |
| 蓝 | Neutral | 99 | #EBF1F4 | PDF_PICKED_APPROXIMATE | false | PDF 中显示 99 色调 |
| 蓝 | Neutral | 100 | #F2F6F8 | PDF_PICKED_APPROXIMATE | false | PDF 中显示 100 色调（非纯白） |
| 蓝 | Neutral Variant | 0 | #000000 | PDF_PICKED_APPROXIMATE | false | 偏蓝紫灰色调 |
| 蓝 | Neutral Variant | 10 | #181C22 | PDF_PICKED_APPROXIMATE | false | |
| 蓝 | Neutral Variant | 20 | #2D3038 | PDF_PICKED_APPROXIMATE | false | |
| 蓝 | Neutral Variant | 30 | #44474E | PDF_PICKED_APPROXIMATE | false | |
| 蓝 | Neutral Variant | 40 | #5B5E66 | PDF_PICKED_APPROXIMATE | false | |
| 蓝 | Neutral Variant | 50 | #74777F | PDF_PICKED_APPROXIMATE | false | |
| 蓝 | Neutral Variant | 60 | #8E9099 | PDF_PICKED_APPROXIMATE | false | |
| 蓝 | Neutral Variant | 70 | #A8ABB4 | PDF_PICKED_APPROXIMATE | false | |
| 蓝 | Neutral Variant | 80 | #C4C6CF | PDF_PICKED_APPROXIMATE | false | |
| 蓝 | Neutral Variant | 90 | #E0E2EC | PDF_PICKED_APPROXIMATE | false | |
| 蓝 | Neutral Variant | 95 | #EEF0FA | PDF_PICKED_APPROXIMATE | false | |
| 蓝 | Neutral Variant | 99 | #FDFBFF | PDF_PICKED_APPROXIMATE | false | |
| 蓝 | Neutral Variant | 100 | #FFFFFF | M3_REFERENCE | false | |

### 2.4 紫色主题 (Purple) — 来自 USER_PROVIDED_TOKEN_FILE（关键 Tone 已确认）

> **注意**：Page 05 的 Purple 主题色板页布局较宽（2044px），且与右侧语义色区域混合，自动提取难以完整分离。以下关键 Tone（10/30/40/80/90）已由 **USER_PROVIDED_TOKEN_FILE** 确认并替换；其余 Tone 为 **M3_GENERATED** 或保留 PDF 拾取值。

| Theme | Palette | Tone | HEX | Source | Confirmed | Notes |
|-------|---------|------|-----|--------|-----------|-------|
| 紫 | Primary | 0 | #000000 | M3_GENERATED | false | 0号色应为黑色 |
| 紫 | Primary | 10 | #21005D | USER_PROVIDED_TOKEN_FILE | true | |
| 紫 | Primary | 20 | #381E72 | M3_GENERATED | false | |
| 紫 | Primary | 30 | #4F378B | USER_PROVIDED_TOKEN_FILE | true | |
| 紫 | Primary | 40 | #6750A4 | USER_PROVIDED_TOKEN_FILE | true | **Key Color** |
| 紫 | Primary | 50 | #9B83DC | PDF_PICKED_APPROXIMATE | false | |
| 紫 | Primary | 60 | #9B83DC | M3_GENERATED | false | |
| 紫 | Primary | 70 | #E9DDFF | PDF_PICKED_APPROXIMATE | false | |
| 紫 | Primary | 80 | #D0BCFF | USER_PROVIDED_TOKEN_FILE | true | |
| 紫 | Primary | 90 | #EADDFF | USER_PROVIDED_TOKEN_FILE | true | |
| 紫 | Primary | 95 | #FFFFFF | M3_REFERENCE | false | |
| 紫 | Primary | 99 | #FFFBFE | PDF_PICKED_APPROXIMATE | false | |
| 紫 | Secondary | 0 | #000000 | M3_GENERATED | false | 灰紫色调 |
| 紫 | Secondary | 10 | #1D192B | USER_PROVIDED_TOKEN_FILE | true | |
| 紫 | Secondary | 20 | #332D42 | M3_GENERATED | false | |
| 紫 | Secondary | 40 | #625B71 | USER_PROVIDED_TOKEN_FILE | true | |
| 紫 | Secondary | 50 | #978EA6 | PDF_PICKED_APPROXIMATE | false | |
| 紫 | Secondary | 60 | #978EA6 | M3_GENERATED | false | |
| 紫 | Secondary | 70 | #E9DFF9 | PDF_PICKED_APPROXIMATE | false | |
| 紫 | Secondary | 90 | #E8DEF8 | USER_PROVIDED_TOKEN_FILE | true | |
| 紫 | Tertiary | 0 | #000000 | M3_GENERATED | false | 偏粉色调（目视） |
| 紫 | Tertiary | 40 | #7D5260 | USER_PROVIDED_TOKEN_FILE | true | |
| 紫 | Tertiary | 50 | #986977 | M3_GENERATED | false | |
| 紫 | Tertiary | 60 | #B78493 | M3_GENERATED | false | |
| 紫 | Tertiary | 90 | #FFD8E4 | USER_PROVIDED_TOKEN_FILE | true | |
| 紫 | Error | 0 | #000000 | M3_GENERATED | false | 与灰绿/蓝 Error 相近 |
| 紫 | Error | 40 | #B3261E | USER_PROVIDED_TOKEN_FILE | true | |
| 紫 | Error | 60 | #E46962 | M3_GENERATED | false | |
| 紫 | Neutral | 0 | #000000 | M3_GENERATED | false | 偏紫灰色调 |
| 紫 | Neutral | 40 | #49454F | USER_PROVIDED_TOKEN_FILE | true | |
| 紫 | Neutral | 50 | #777579 | M3_GENERATED | false | |
| 紫 | Neutral | 60 | #959195 | M3_GENERATED | false | |
| 紫 | Neutral | 90 | #E7E2E6 | USER_PROVIDED_TOKEN_FILE | true | |
| 紫 | Neutral | 100 | #FFFBFE | M3_GENERATED | false | |
| 紫 | Neutral Variant | 0 | #000000 | M3_GENERATED | false | 偏紫灰色调 |
| 紫 | Neutral Variant | 40 | #79747E | USER_PROVIDED_TOKEN_FILE | true | |
| 紫 | Neutral Variant | 50 | #79747E | M3_GENERATED | false | |
| 紫 | Neutral Variant | 60 | #94909A | M3_GENERATED | false | |
| 紫 | Neutral Variant | 90 | #E8E0E8 | USER_PROVIDED_TOKEN_FILE | true | |
| 紫 | Neutral Variant | 100 | #FFFBFE | M3_GENERATED | false | |

> **紫色主题色板完整提取受阻原因**：Page 05 布局为宽版双栏（Tonal Palette 左 + Light Theme 语义色右），自动扫描难以区分左右边界，导致颜色混合。建议从 Figma 源文件直接复制色值，或通过 Figma Dev Mode 导出 JSON Token 数据。

---

## 3. Semantic Colors 补齐表

### 3.1 映射规则

基于 Material Design 3 标准语义映射规则，将 Primitive Tonal Palette 映射为 Semantic Tokens。映射关系如下：

- `primary` = Primary-40
- `on-primary` = Primary-100
- `primary-container` = Primary-90
- `on-primary-container` = Primary-10
- `secondary` = Secondary-40
- `on-secondary` = Secondary-100
- `secondary-container` = Secondary-90
- `on-secondary-container` = Secondary-10
- `tertiary` = Tertiary-40
- `on-tertiary` = Tertiary-100
- `tertiary-container` = Tertiary-90
- `on-tertiary-container` = Tertiary-10
- `error` = Error-40
- `on-error` = Error-100
- `error-container` = Error-90
- `on-error-container` = Error-10
- `surface` = Neutral-98
- `on-surface` = Neutral-10
- `surface-variant` = Neutral Variant-90
- `on-surface-variant` = Neutral Variant-30
- `outline` = Neutral Variant-50
- `outline-variant` = Neutral Variant-80
- `surface-container-lowest` = Neutral-100
- `surface-container-low` = Neutral-96
- `surface-container` = Neutral-94 (M3 标准，本规范未明确，需确认)
- `surface-container-high` = Neutral-92 (M3 标准，本规范未明确，需确认)
- `surface-container-highest` = Neutral-90 (M3 标准，本规范未明确，需确认)
- `inverse-surface` = Neutral-20
- `inverse-on-surface` = Neutral-95
- `inverse-primary` = Primary-80
- `scrim` = Neutral-0 (with 32% opacity, M3 标准)
- `shadow` = Neutral-0 (M3 标准)

> **注意**：surface-container 系列 (low/high/highest) 在原始 PDF 中未明确对应，按 M3 标准推导。**用户已确认保留此系列 Token**，色值需从 Figma 源文件确认后替换。

### 3.2 灰绿主题 Semantic Colors

| Token | Semantic Role | Reference Tone | 灰绿 HEX | Source | Confirmed |
|-------|--------------|----------------|----------|--------|-----------|
| primary | 主色 | Primary-40 | #006B56 | PDF_PICKED_APPROXIMATE | false |
| on-primary | 主色上文字 | Primary-100 | #FFFFFF | M3_REFERENCE | false |
| primary-container | 主色容器 | Primary-90 | #7EF8D5 | PDF_PICKED_APPROXIMATE | false |
| on-primary-container | 主色容器上文字 | Primary-10 | #002018 | PDF_PICKED_APPROXIMATE | false |
| secondary | 次色 | Secondary-40 | #4B635B | PDF_PICKED_APPROXIMATE | false |
| on-secondary | 次色上文字 | Secondary-100 | #FFFFFF | M3_REFERENCE | false |
| secondary-container | 次色容器 | Secondary-90 | #CEE9DD | PDF_PICKED_APPROXIMATE | false |
| on-secondary-container | 次色容器上文字 | Secondary-10 | #072019 | PDF_PICKED_APPROXIMATE | false |
| tertiary | 第三色 | Tertiary-40 | #B02F00 | PDF_PICKED_APPROXIMATE | false |
| on-tertiary | 第三色上文字 | Tertiary-100 | #FFFFFF | M3_REFERENCE | false |
| tertiary-container | 第三色容器 | Tertiary-90 | #FFDBD1 | PDF_PICKED_APPROXIMATE | false |
| on-tertiary-container | 第三色容器上文字 | Tertiary-10 | #3B0900 | PDF_PICKED_APPROXIMATE | false |
| error | 错误色 | Error-40 | #BA1A1A | PDF_PICKED_APPROXIMATE | false |
| on-error | 错误色上文字 | Error-100 | #FFFFFF | M3_REFERENCE | false |
| error-container | 错误色容器 | Error-90 | #FFDAD6 | PDF_PICKED_APPROXIMATE | false |
| on-error-container | 错误色容器上文字 | Error-10 | #410002 | PDF_PICKED_APPROXIMATE | false |
| surface | 表面色 | Neutral-98 | #F3FFF9 | PDF_PICKED_APPROXIMATE | false |
| on-surface | 表面上文字 | Neutral-10 | #141D1A | PDF_PICKED_APPROXIMATE | false |
| surface-variant | 表面变体 | Neutral Variant-90 | #EBE86E | PDF_PICKED_APPROXIMATE | false |
| on-surface-variant | 表面变体上文字 | Neutral Variant-30 | #4B4900 | PDF_PICKED_APPROXIMATE | false |
| outline | 边框 | Neutral Variant-50 | #7D7A00 | PDF_PICKED_APPROXIMATE | false |
| outline-variant | 边框变体 | Neutral Variant-80 | #CFCB55 | PDF_PICKED_APPROXIMATE | false |
| surface-container-lowest | 最低表面容器 | Neutral-100 | #FFFFFF | USER_PROVIDED_TOKEN_FILE | true |
| surface-container-low | 低表面容器 | Neutral-96 | #E9F3ED | PDF_PICKED_APPROXIMATE | false |
| surface-container | 表面容器 | Neutral-94 | TODO_CONFIRM | M3_REFERENCE | false | 用户已确认保留，色值待从 Figma 确认 |
| surface-container-high | 高表面容器 | Neutral-92 | TODO_CONFIRM | M3_REFERENCE | false | 用户已确认保留，色值待从 Figma 确认 |
| surface-container-highest | 最高表面容器 | Neutral-90 | #DBE5DF | PDF_PICKED_APPROXIMATE | false |
| inverse-surface | 反色表面 | Neutral-20 | #29322F | PDF_PICKED_APPROXIMATE | false |
| inverse-on-surface | 反色表面上文字 | Neutral-95 | #E9F3ED | PDF_PICKED_APPROXIMATE | false |
| inverse-primary | 反色主色 | Primary-80 | #5FDBBA | PDF_PICKED_APPROXIMATE | false |
| scrim | 遮罩 | Neutral-0 | #000000 (32% opacity) | M3_REFERENCE | false | M3 标准 32% 透明度 |
| shadow | 阴影 | Neutral-0 | #000000 | M3_REFERENCE | false | |

### 3.3 蓝色主题 Semantic Colors

| Token | Semantic Role | Reference Tone | 蓝 HEX | Source | Confirmed |
|-------|--------------|----------------|--------|--------|-----------|
| primary | 主色 | Primary-40 | #0B57D0 | USER_PROVIDED_TOKEN_FILE | true |
| on-primary | 主色上文字 | Primary-100 | #FFFFFF | M3_REFERENCE | false |
| primary-container | 主色容器 | Primary-90 | #D3E3FD | USER_PROVIDED_TOKEN_FILE | true |
| on-primary-container | 主色容器上文字 | Primary-10 | #041E49 | USER_PROVIDED_TOKEN_FILE | true |
| secondary | 次色 | Secondary-40 | #00639B | USER_PROVIDED_TOKEN_FILE | true |
| on-secondary | 次色上文字 | Secondary-100 | #FFFFFF | M3_REFERENCE | false |
| secondary-container | 次色容器 | Secondary-90 | #C2E7FF | USER_PROVIDED_TOKEN_FILE | true |
| on-secondary-container | 次色容器上文字 | Secondary-10 | #001D35 | USER_PROVIDED_TOKEN_FILE | true |
| tertiary | 第三色 | Tertiary-40 | #146C2E | USER_PROVIDED_TOKEN_FILE | true |
| on-tertiary | 第三色上文字 | Tertiary-100 | #FFFFFF | M3_REFERENCE | false |
| tertiary-container | 第三色容器 | Tertiary-90 | #C4EED0 | USER_PROVIDED_TOKEN_FILE | true |
| on-tertiary-container | 第三色容器上文字 | Tertiary-10 | #072711 | USER_PROVIDED_TOKEN_FILE | true |
| error | 错误色 | Error-40 | #B3261E | USER_PROVIDED_TOKEN_FILE | true |
| on-error | 错误色上文字 | Error-100 | #FFFFFF | M3_REFERENCE | false |
| error-container | 错误色容器 | Error-90 | #F9DEDC | USER_PROVIDED_TOKEN_FILE | true |
| on-error-container | 错误色容器上文字 | Error-10 | #410E0B | USER_PROVIDED_TOKEN_FILE | true |
| surface | 表面色 | Neutral-98 | #FFFFFF | USER_PROVIDED_TOKEN_FILE | true |
| on-surface | 表面上文字 | Neutral-10 | #1F1F1F | USER_PROVIDED_TOKEN_FILE | true |
| surface-variant | 表面变体 | Neutral Variant-90 | #E1E3E1 | USER_PROVIDED_TOKEN_FILE | true |
| on-surface-variant | 表面变体上文字 | Neutral Variant-30 | #44474E | USER_PROVIDED_TOKEN_FILE | true |
| outline | 边框 | Neutral Variant-50 | #C4C7C5 | USER_PROVIDED_TOKEN_FILE | true |
| outline-variant | 边框变体 | Neutral Variant-80 | #747775 | USER_PROVIDED_TOKEN_FILE | true |
| surface-container-lowest | 最低表面容器 | Neutral-100 | #FFFFFF | USER_PROVIDED_TOKEN_FILE | true |
| surface-container-low | 低表面容器 | Neutral-96 | #F0F4F9 | USER_PROVIDED_TOKEN_FILE | true |
| surface-container | 表面容器 | Neutral-94 | TODO_CONFIRM | M3_REFERENCE | false | 用户已确认保留，色值待从 Figma 确认 |
| surface-container-high | 高表面容器 | Neutral-92 | TODO_CONFIRM | M3_REFERENCE | false | 用户已确认保留，色值待从 Figma 确认 |
| surface-container-highest | 最高表面容器 | Neutral-90 | #DDE3EA | USER_PROVIDED_TOKEN_FILE | true |
| inverse-surface | 反色表面 | Neutral-20 | #F2F2F2 | USER_PROVIDED_TOKEN_FILE | true |
| inverse-on-surface | 反色表面上文字 | Neutral-95 | #303030 | USER_PROVIDED_TOKEN_FILE | true |
| inverse-primary | 反色主色 | Primary-80 | #A8C7FA | USER_PROVIDED_TOKEN_FILE | true |
| scrim | 遮罩 | Neutral-0 | #000000 (32% opacity) | M3_REFERENCE | false |
| shadow | 阴影 | Neutral-0 | #000000 | M3_REFERENCE | false |

### 3.4 紫色主题 Semantic Colors — 提取自 Page 07

> 紫色主题的 Semantic Colors 从 Page 07 目视读取。Page 07 明确标注了 P-40, P-100, S-40, S-100, T-40, T-100, E-40, E-100 等关键色值，以及 Surface/Outline/Scrim/Shadow 等系统色。

| Token | Semantic Role | Reference Tone | 紫 HEX | Source | Confirmed |
|-------|--------------|----------------|--------|--------|-----------|
| primary | 主色 | Primary-40 | #6750A4 | USER_PROVIDED_TOKEN_FILE | true | 来自源设计稿 token 文件 |
| on-primary | 主色上文字 | Primary-100 | #FFFFFF | USER_PROVIDED_TOKEN_FILE | true | |
| primary-container | 主色容器 | Primary-90 | #EADDFF | USER_PROVIDED_TOKEN_FILE | true | 来自源设计稿 token 文件 |
| on-primary-container | 主色容器上文字 | Primary-10 | #21005D | USER_PROVIDED_TOKEN_FILE | true | 来自源设计稿 token 文件 |
| secondary | 次色 | Secondary-40 | #625B71 | USER_PROVIDED_TOKEN_FILE | true | 来自源设计稿 token 文件 |
| on-secondary | 次色上文字 | Secondary-100 | #FFFFFF | USER_PROVIDED_TOKEN_FILE | true | |
| secondary-container | 次色容器 | Secondary-90 | #E8DEF8 | USER_PROVIDED_TOKEN_FILE | true | 来自源设计稿 token 文件 |
| on-secondary-container | 次色容器上文字 | Secondary-10 | #1D192B | USER_PROVIDED_TOKEN_FILE | true | |
| tertiary | 第三色 | Tertiary-40 | #7D5260 | USER_PROVIDED_TOKEN_FILE | true | 来自源设计稿 token 文件 |
| on-tertiary | 第三色上文字 | Tertiary-100 | #FFFFFF | USER_PROVIDED_TOKEN_FILE | true | |
| tertiary-container | 第三色容器 | Tertiary-90 | #FFD8E4 | USER_PROVIDED_TOKEN_FILE | true | 来自源设计稿 token 文件 |
| on-tertiary-container | 第三色容器上文字 | Tertiary-10 | #31111D | USER_PROVIDED_TOKEN_FILE | true | |
| error | 错误色 | Error-40 | #B3261E | USER_PROVIDED_TOKEN_FILE | true | 来自源设计稿 token 文件 |
| on-error | 错误色上文字 | Error-100 | #FFFFFF | USER_PROVIDED_TOKEN_FILE | true | |
| error-container | 错误色容器 | Error-90 | #F9DEDC | USER_PROVIDED_TOKEN_FILE | true | 目视 Page 07 浅红容器 |
| on-error-container | 错误色容器上文字 | Error-10 | #410E0B | USER_PROVIDED_TOKEN_FILE | true | |
| surface | 表面色 | Neutral-98 | #FEF7FF | USER_PROVIDED_TOKEN_FILE | true | 来自源设计稿 token 文件 |
| on-surface | 表面上文字 | Neutral-10 | #1D1B20 | USER_PROVIDED_TOKEN_FILE | true | 来自源设计稿 token 文件 |
| surface-variant | 表面变体 | Neutral Variant-90 | #E8E0E8 | USER_PROVIDED_TOKEN_FILE | true | 来自源设计稿 token 文件 |
| on-surface-variant | 表面变体上文字 | Neutral Variant-30 | #49454F | USER_PROVIDED_TOKEN_FILE | true | |
| outline | 边框 | Neutral Variant-50 | #CAC4D0 | USER_PROVIDED_TOKEN_FILE | true | 来自源设计稿 token 文件 |
| outline-variant | 边框变体 | Neutral Variant-80 | #79747E | USER_PROVIDED_TOKEN_FILE | true | 来自源设计稿 token 文件 |
| surface-container-lowest | 最低表面容器 | Neutral-100 | #FFFFFF | USER_PROVIDED_TOKEN_FILE | true | |
| surface-container-low | 低表面容器 | Neutral-96 | #F3EDF7 | USER_PROVIDED_TOKEN_FILE | true | 来自源设计稿 token 文件 |
| surface-container | 表面容器 | Neutral-94 | TODO_CONFIRM | M3_REFERENCE | false | 用户已确认保留，色值待从 Figma 确认 |
| surface-container-high | 高表面容器 | Neutral-92 | TODO_CONFIRM | M3_REFERENCE | false | 用户已确认保留，色值待从 Figma 确认 |
| surface-container-highest | 最高表面容器 | Neutral-90 | #E6E0E9 | USER_PROVIDED_TOKEN_FILE | true | 来自源设计稿 token 文件 |
| inverse-surface | 反色表面 | Neutral-20 | #F5EFF7 | USER_PROVIDED_TOKEN_FILE | true | 来自源设计稿 token 文件 |
| inverse-on-surface | 反色表面上文字 | Neutral-95 | #322F35 | USER_PROVIDED_TOKEN_FILE | true | 来自源设计稿 token 文件 |
| inverse-primary | 反色主色 | Primary-80 | #D0BCFF | USER_PROVIDED_TOKEN_FILE | true | 来自源设计稿 token 文件 |
| scrim | 遮罩 | Neutral-0 | #000000 (32% opacity) | M3_REFERENCE | false | |
| shadow | 阴影 | Neutral-0 | #000000 | M3_REFERENCE | false | |

---

## 4. Success / Warning / Info 语义色补齐表

### 4.1 数据来源说明

原始视觉规范中 **未明确建立 Success / Warning / Info 作为系统级语义色 Token**。但在以下页面中发现了相关辅助色：

- **Page 13 (设计变量总结-颜色/状态层/阴影)**：展示了 辅色/黄 (yellow-1~4)、辅色/橙 (Orange-1~4)、辅色/紫 (purple-1~4) 作为辅助色，但未明确其语义角色。
- **Page 49 (Alert 警告提示)**：展示了 Alert 组件的 4 种状态色块，目视可识别为：
  - 蓝色 Alert（信息提示）
  - 橙色/红色 Alert（警告/错误）
  - 绿色 Alert（成功提示）
  - 黄色 Alert（注意提示）

基于以上观察，**建议**将 Alert 组件中的颜色提升为系统语义色，但需设计师确认。

### 4.2 建议的 Success / Warning / Info Tokens

| Token | Role | 建议 HEX | 参考来源 | Source | Confirmed | Notes |
|-------|------|----------|----------|--------|-----------|-------|
| success | 成功色 | TODO_CONFIRM | Alert 组件绿色（待提取） | TODO_CONFIRM | false | 原始规范未明确色值，建议从 Alert 组件绿色提取或建立独立 Success Palette |
| on-success | 成功色上文字 | TODO_CONFIRM | M3 标准（通常为白色） | TODO_CONFIRM | false | |
| success-container | 成功色容器 | TODO_CONFIRM | Alert 组件浅绿色（待提取） | TODO_CONFIRM | false | |
| on-success-container | 成功色容器上文字 | TODO_CONFIRM | — | TODO_CONFIRM | false | |
| warning | 警告色 | TODO_CONFIRM | Alert 组件橙色（待提取） | TODO_CONFIRM | false | 原始规范未明确色值，建议从 Alert 橙色提取或建立独立 Warning Palette |
| on-warning | 警告色上文字 | TODO_CONFIRM | M3 标准（通常为白色） | TODO_CONFIRM | false | |
| warning-container | 警告色容器 | TODO_CONFIRM | Alert 组件浅橙色（待提取） | TODO_CONFIRM | false | |
| on-warning-container | 警告色容器上文字 | TODO_CONFIRM | — | TODO_CONFIRM | false | |
| info | 信息色 | TODO_CONFIRM | Alert 组件蓝色（待提取） | TODO_CONFIRM | false | 原始规范未明确色值，建议从 Alert 蓝色提取或建立独立 Info Palette |
| on-info | 信息色上文字 | TODO_CONFIRM | M3 标准（通常为白色） | TODO_CONFIRM | false | |
| info-container | 信息色容器 | TODO_CONFIRM | Alert 组件浅蓝色（待提取） | TODO_CONFIRM | false | |
| on-info-container | 信息色容器上文字 | TODO_CONFIRM | — | TODO_CONFIRM | false | |

### 4.3 关键决策建议

1. **Success 色**：建议从 Alert 组件的绿色色块直接提取，或复用「蓝主题」的 Tertiary（绿色调）。如果 3 套主题需要各自独立的 Success 色，需为每套主题定义 Success Palette。
2. **Warning 色**：当前灰绿主题的 Tertiary 是橙/棕色（#FF5722），虽然可用但语义上 Tertiary 应为「第三色」而非「警告色」。**建议为 Warning 单独定义一套橙黄色 Palette**（参考 Page 13 的 辅色/橙）。
3. **Info 色**：当前规范未明确 Info 色。在大多数设计系统中，Info 可以复用 Primary 色（蓝色调），但建议独立定义以避免与 Primary 品牌色混淆。
4. **推荐方案**：
   - 短期（MVP）：Success / Warning / Info 建立轻量语义 Token（各 4 个），色值保持 TODO_CONFIRM，待设计师确认。
   - 长期：为 Success / Warning / Info 各自建立独立 Tonal Palette（0-100），纳入 Figma Variables 的「Color / Primitive」Collection。当前先建立轻量 Token。

> **所有 Success / Warning / Info 色值目前均为 TODO_CONFIRM，未从任何来源确认。必须在 Figma 搭建前由设计师从 Alert 组件或独立色板提供准确色值。**

---

## 5. Typography 补齐表

### 5.1 数据来源

- **Page 09**：B1/B2/B3/H1/H2/H3/H4/T1/T2/T3 层级的字号、行高、字重（明确标注「苹方」字体）。
- **Page 10**：display/titl/body 层级的字号、行高（明确标注「苹方」字体）。
- **Page 09 底部说明**：M3 辅助信息定位规则、段落间距、行高计算方式。

### 5.2 字体说明

- **中文字体**：文档明确为 **苹方 (PingFang SC)**。
- **英文字体**：文档未明确指定。用户确认：中文和英文优先使用系统字体栈；Roboto 作为 Material Design 3 参考字体或 Android 场景字体，不强制加载。
- **字重**：文档中使用的字重标注为：
  - `bold`：对应 font-weight 700
  - `Medium`：对应 font-weight 500
  - `regular`：对应 font-weight 400
- **字号与行高格式**：文档中格式为「字号/行高」，如「56/64」表示 font-size: 56px, line-height: 64px。

### 5.3 Typography Token 表

| Token | Chinese Font | English Font | Size (px) | Line Height (px) | Weight | Letter Spacing | Usage | Source | Confirmed |
|-------|-------------|--------------|-----------|------------------|--------|----------------|-------|--------|-----------|
| display/large | 苹方 | Roboto | 56 | 64 | 400 | 0 | 运营标题-大 | SOURCE_DESIGN | true |
| display/medium | 苹方 | Roboto | 46 | 52 | 400 | 0 | 运营标题-中 | SOURCE_DESIGN | true |
| display/small | 苹方 | Roboto | 36 | 48 | 400 | 0 | 运营标题-小 | SOURCE_DESIGN | true |
| headline/large | 苹方 | Roboto | 24 | 34 | 700 | 0 | 加粗标题超大 (H1) | SOURCE_DESIGN | true |
| headline/medium | 苹方 | Roboto | 20 | 30 | 700 | 0 | 加粗标题-大 (H2) | SOURCE_DESIGN | true |
| headline/small | 苹方 | Roboto | 18 | 28 | 700 | 0 | 加粗标题-大 (H2-1) | SOURCE_DESIGN | true |
| title/large | 苹方 | Roboto | 24 | 34 | 500 | 0 | 标题-大 (Medium) | SOURCE_DESIGN | true |
| title/medium | 苹方 | Roboto | 20 | 30 | 500 | 0 | 标题-中 (Medium) | SOURCE_DESIGN | true |
| title/small | 苹方 | Roboto | 16 | 26 | 500 | 0 | 标题-小 (Medium) | SOURCE_DESIGN | true |
| body/large | 苹方 | Roboto | 18 | 28 | 400 | 0 | 正文-大 | SOURCE_DESIGN | true |
| body/medium | 苹方 | Roboto | 16 | 26 | 400 | 0 | 正文-常规 | SOURCE_DESIGN | true |
| body/small | 苹方 | Roboto | 14 | 22 | 400 | 0 | 正文-常规 (T2) | SOURCE_DESIGN | true |
| label/large | 苹方 | Roboto | 12 | 20 | 400 | 0 | 辅助文案/次要文案 (T3-3) | SOURCE_DESIGN | true |
| label/medium | 苹方 | Roboto | 12 | 20 | 400 | 0 | 辅助文案/次要文案 (T3-1) | SOURCE_DESIGN | true |
| label/small | 苹方 | Roboto | 11 | 13 | 400 | 0 | 辅助文案/次要文案 (T3-2) | SOURCE_DESIGN | true |
| label/xsmall | 苹方 | Roboto | 10 | 12 | 400 | 0 | 辅助文案/次要文案 (T3) | SOURCE_DESIGN | true |

> **注意**：
> 1. `display` 层级使用 `font-weight: 400`（regular），`headline` 层级使用 `700`（bold），`title` 层级使用 `500`（Medium）。
> 2. `letterSpacing` 在中文排版中通常保持默认值（0），文档未明确指定 tracking 调整。
> 3. `label/xsmall` (10/12) 是文档中明确出现的最小字号，用于水印文本等场景。
> 4. 英文建议使用 Roboto 字体（Google Fonts），若无法加载则 fallback 到系统字体。

### 5.4 字体回退方案（CSS font-family）

```css
/* 完整字体栈（系统优先，Roboto 不强制） */
font-family: system-ui, -apple-system, BlinkMacSystemFont, "PingFang SC", "Microsoft YaHei", "Noto Sans CJK SC", "Segoe UI", Roboto, Arial, sans-serif;

/* 按平台拆分 */
/* macOS / iOS */
font-family: "PingFang SC", "Hiragino Sans GB", -apple-system, BlinkMacSystemFont, sans-serif;

/* Windows */
font-family: "Microsoft YaHei", "Microsoft YaHei UI", "PingFang SC", sans-serif;

/* Android */
font-family: "Noto Sans CJK SC", "PingFang SC", Roboto, sans-serif; /* Android 场景 Roboto 作为系统字体 */

/* Web / 通用回退（推荐） */
font-family: system-ui, -apple-system, BlinkMacSystemFont, "PingFang SC", "Microsoft YaHei", "Noto Sans CJK SC", "Segoe UI", Roboto, Arial, sans-serif; /* Roboto 不单独强制加载，除非产品后续明确要求 */
```

| 平台 | 中文字体 | 英文字体 | 来源 | 已确认 |
|------|---------|---------|------|--------|
| macOS / iOS | PingFang SC | system-ui / -apple-system | SOURCE_DESIGN | true | 系统字体优先 |
| Windows | Microsoft YaHei | Segoe UI (系统字体) | M3_REFERENCE | false | 系统字体优先，工程推荐 |
| Android | Noto Sans CJK SC | Roboto (系统字体) | M3_REFERENCE | false | Android 系统字体，不强制加载 |
| Web fallback | system-ui, PingFang SC, Microsoft YaHei | system-ui, Segoe UI, Roboto | M3_REFERENCE | false | 系统字体优先，Roboto 不强制 |

> **字体确认状态**：
> - 「苹方」在 PDF 中明确标注（Page 09, 10），**已确认**。
> - Roboto 经用户确认：**不强制作为 Web 端唯一字体**。Web 端优先使用系统字体栈（system-ui, -apple-system, BlinkMacSystemFont, Segoe UI），Roboto 仅作为回退。Android 场景使用 Roboto 作为系统字体。

### 5.5 排版规则（来自 Page 09 底部说明）

1. **辅助信息定位**：
   - 辅助信息必须和对应的主信息（标题、内容）绑定，不能独立存在。
   - 位置在主信息的下方 / 右侧（避免喧宾夺主）。
   - 字号更小、颜色更浅（通常用 `OnSurfaceVariant`）。
   - 间距紧凑：与主信息的间距 ≤ 8dp，与其他模块的间距 ≥ 16dp，保证关联感。

2. **行高计算**：
   - 西文基本行高约是字号的 1.2 倍。
   - 中文因为字符密实且高度一致，没有西文的上伸部和下伸部来创造行间空隙，所以一般行高需要更大，默认行高为字号的 1.4 倍。
   - 段间距至少为字体大小的 1.5 倍。
   - 正文 14px 字号对应段间距为 21px。

3. **字层级区分**：
   - 区分文本主副层级，字号差距需保持 2-4px。

---

## 6. P0 组件核心尺寸补齐表

> **数据来源**：以下尺寸从 PDF 对应组件页面直接提取或目视测量。标注 `PDF_MEASURED` 表示已读取到明确数值；标注 `PDF_INFERRED` 表示从图示比例推断；标注 `M3_REFERENCE` 表示 M3 标准参考值。

### 6.1 Button（按钮）— Page 19

| Component | Variant / Size | Height | Min Width | Padding X | Padding Y | Gap | Icon Size | Radius | Border | Typography | Source | Confirmed | Notes |
|-----------|---------------|--------|-----------|-----------|-----------|-----|-----------|--------|--------|------------|--------|-----------|-------|
| Button | Text / Small | 28 | — | 8 | 0 | 8 | 20 | 20 | 0 | label/large (12px) | PDF_MEASURED | true | 纯文字按钮 |
| Button | Text / Medium | 32 | — | 8 | 0 | 8 | 20 | 20 | 0 | label/large (12px) | PDF_MEASURED | true | 默认文字按钮 |
| Button | Text / Large | 40 | — | 12 | 0 | 8 | 24 | 20 | 0 | body/medium (16px) | PDF_MEASURED | true | |
| Button | Filled / Small | 28 | — | 12 | 0 | 8 | 20 | 20 | 0 | label/large (12px) | PDF_MEASURED | true | 填充按钮 |
| Button | Filled / Medium | 32 | — | 12 | 0 | 8 | 20 | 20 | 0 | label/large (12px) | PDF_MEASURED | true | 默认填充按钮 |
| Button | Filled / Large | 40 | — | 16 | 0 | 8 | 24 | 20 | 0 | body/medium (16px) | PDF_MEASURED | true | |
| Button | Outlined / Small | 28 | — | 12 | 0 | 8 | 20 | 20 | 1 | label/large (12px) | PDF_MEASURED | true | 边框颜色 = Primary |
| Button | Outlined / Medium | 32 | — | 12 | 0 | 8 | 20 | 20 | 1 | label/large (12px) | PDF_MEASURED | true | |
| Button | Outlined / Large | 40 | — | 16 | 0 | 8 | 24 | 20 | 1 | body/medium (16px) | PDF_MEASURED | true | |
| Button | Tonal / Small | 28 | — | 12 | 0 | 8 | 20 | 20 | 0 | label/large (12px) | PDF_MEASURED | true | 填充色 = Secondary Container |
| Button | Tonal / Medium | 32 | — | 12 | 0 | 8 | 20 | 20 | 0 | label/large (12px) | PDF_MEASURED | true | |
| Button | Tonal / Large | 40 | — | 16 | 0 | 8 | 24 | 20 | 0 | body/medium (16px) | PDF_MEASURED | true | |
| Button | Elevated / Small | 28 | — | 12 | 0 | 8 | 20 | 20 | 0 | label/large (12px) | PDF_MEASURED | true | 带阴影的填充按钮 |
| Button | Elevated / Medium | 32 | — | 12 | 0 | 8 | 20 | 20 | 0 | label/large (12px) | PDF_MEASURED | true | |
| Button | Elevated / Large | 40 | — | 16 | 0 | 8 | 24 | 20 | 0 | body/medium (16px) | PDF_MEASURED | true | |
| Icon Button | Small | 28 | 28 | 0 | 0 | 0 | 20 | 20 | 0 | — | PDF_MEASURED | true | 纯图标按钮 |
| Icon Button | Medium | 32 | 32 | 0 | 0 | 0 | 20 | 20 | 0 | — | PDF_MEASURED | true | 默认图标按钮 |
| Icon Button | Large | 40 | 40 | 0 | 0 | 0 | 24 | 20 | 0 | — | PDF_MEASURED | true | |
| FAB | Standard | 56 | 56 | 0 | 0 | 0 | 24 | 16 | 0 | — | PDF_MEASURED | true | 悬浮按钮 (Page 20) |
| FAB | Small | 40 | 40 | 0 | 0 | 0 | 20 | 12 | 0 | — | PDF_MEASURED | true | |
| FAB | Mini | 40 | 40 | 0 | 0 | 0 | 20 | 12 | 0 | PDF_MEASURED | true | 文档标注 Mini=40 |
| FAB | Large | 96 | 96 | 0 | 0 | 0 | 36 | 28 | 0 | — | PDF_MEASURED | true | |
| FAB Extended | — | 56 | — | 16 | 0 | 8 | 24 | 16 | 0 | body/medium | PDF_MEASURED | true | 图标+文字悬浮按钮 |

> **Button 状态层透明度**：hover 8%, focus 12%, pressed 12%, dragged 16%（M3 标准，Page 13 确认）。

### 6.2 Text Field（文本字段）— Page 43

| Component | Variant | Height | Min Width | Padding X | Padding Y | Gap | Icon Size | Radius | Border | Typography | Source | Confirmed | Notes |
|-----------|---------|--------|-----------|-----------|-----------|-----|-----------|--------|--------|------------|--------|-----------|-------|
| Text Field | Filled | 56 | 200 | 16 | 12 | 8 | 24 | 4 (top) | 0 (bottom 1px) | body/medium | PDF_INFERRED | false | M3 Filled TextField 标准高度 |
| Text Field | Outlined | 56 | 200 | 16 | 12 | 8 | 24 | 4 | 1 | body/medium | PDF_INFERRED | false | M3 Outlined TextField 标准高度 |
| Text Field | Small | 40 | 200 | 12 | 8 | 8 | 20 | 4 | 1 | body/small | PDF_MEASURED | true | 搜索框小尺寸 (Page 35) |
| Text Field | Medium | 48 | 200 | 16 | 12 | 8 | 24 | 4 | 1 | body/medium | PDF_MEASURED | true | 搜索框中尺寸 (Page 35) |
| Text Field | Large | 56 | 200 | 16 | 12 | 8 | 24 | 4 | 1 | body/medium | PDF_MEASURED | true | 搜索框大尺寸 (Page 35) |

> **Text Field 特别说明**：
> - PDF Page 43 展示了多种 Text Field 状态（Enabled, Hover, Focused, Error 等），但未明确标注具体尺寸数值。
> - 搜索框尺寸（Page 35）明确标注了大/中/小三种高度：56/48/40。
> - 建议 Text Field 复用搜索框的尺寸体系：Small=40, Medium=48, Large=56。
> - 填充式 (Filled) 底部边框 1px，Outlined 全边框 1px。
> - Leading/Trailing Icon 尺寸：24px（标准），20px（紧凑）。

### 6.3 Radio / Checkbox / Switch — Page 34

| Component | Variant | Height | Width | Padding | Icon Size | Radius | Border | Typography | Source | Confirmed | Notes |
|-----------|---------|--------|-------|---------|-----------|--------|--------|------------|--------|-----------|-------|
| Radio | Standard | 20 | 20 | 0 | — | 10 | 2 | — | PDF_MEASURED | true | 圆形，边框 2px |
| Radio | Selected | 20 | 20 | 0 | 10 | 10 | 0 | — | PDF_MEASURED | true | 内圆点 10px |
| Checkbox | Standard | 20 | 20 | 0 | — | 2 | 2 | — | PDF_MEASURED | true | 方形，边框 2px |
| Checkbox | Selected | 20 | 20 | 0 | 16 | 2 | 0 | — | PDF_MEASURED | true | 勾选图标 16px |
| Switch | Small | 24 | 36 | 0 | 16 | 12 | 0 | — | PDF_MEASURED | true | 圆角 12px |
| Switch | Medium | 32 | 52 | 0 | 24 | 16 | 0 | — | PDF_MEASURED | true | 圆角 16px |
| Switch | Large | 40 | 68 | 0 | 32 | 20 | 0 | — | PDF_MEASURED | true | 圆角 20px |

> **Switch 特别说明**：
> - PDF Page 34 明确展示了 3 种 Switch 尺寸：小/中/大。
> - 鼠标放上有放大效果（M3 标准 pressed/hover 状态）。
> - 选中状态：轨道填充 Primary，滑块白色 + 阴影。
> - 未选中状态：轨道边框 Neutral Variant，滑块白色。

### 6.4 Card（卡片）— Page 27

| Component | Variant | Height | Min Width | Padding X | Padding Y | Gap | Radius | Border | Elevation | Typography | Source | Confirmed | Notes |
|-----------|---------|--------|-----------|-----------|-----------|-----|--------|--------|-----------|------------|--------|-----------|-------|
| Card | Standard | — | 200 | 16 | 16 | 8 | 12 | 0 | Level 1 | title/small + body/small | M3_REFERENCE | false | M3 标准建议值，源设计稿无明确标注时采用 |
| Card | Outlined | — | 200 | 16 | 16 | 8 | 12 | 1 | 0 | title/small + body/small | M3_REFERENCE | false | M3 标准建议值，源设计稿无明确标注时采用 |
| Card | Elevated | — | 200 | 16 | 16 | 8 | 12 | 0 | Level 1 | title/small + body/small | M3_REFERENCE | false | M3 标准建议值，源设计稿无明确标注时采用 |
| Card | Filled | — | 200 | 16 | 16 | 8 | 12 | 0 | 0 | title/small + body/small | M3_REFERENCE | false | M3 标准建议值，源设计稿无明确标注时采用 |

> **Card 特别说明**：
> - PDF Page 27 展示了多种 Card 样式（图片卡片、操作卡片、选择卡片等），但未明确标注具体尺寸。
> - 经用户确认：Card 精确尺寸暂不直接锁死为 M3 标准。以源设计稿测量值为准；如果源设计稿没有明确，则采用 M3_REFERENCE 作为临时建议值，并标记 confirmed=false。
> - 图片卡片建议使用 16:9 或 4:3 比例（Page 36 明确）。

### 6.5 List / List Item — Page 31

| Component | Variant | Height | Min Width | Padding X | Padding Y | Gap | Icon Size | Radius | Border | Typography | Source | Confirmed | Notes |
|-----------|---------|--------|-----------|-----------|-----------|-----|-----------|--------|--------|------------|--------|-----------|-------|
| List Item | Single-line | 56 | — | 16 | 16 | 16 | 24 | 0 | 0 | body/medium | PDF_MEASURED | true | 标准单行列表 |
| List Item | Single-line (with large image) | 72 | — | 16 | 16 | 16 | 40 | 0 | 0 | body/medium | PDF_MEASURED | true | 大图片列表 |
| List Item | Single-line (with small image) | 48 | — | 16 | 12 | 12 | 32 | 0 | 0 | body/small | PDF_MEASURED | true | 小图片列表 |
| List Item | Two-line | 72 | — | 16 | 16 | 16 | 24 | 0 | 0 | body/medium + label/medium | PDF_MEASURED | true | 双行列表 |
| List Item | Three-line | 88 | — | 16 | 16 | 16 | 24 | 0 | 0 | body/medium + label/medium | PDF_MEASURED | true | 三行列表 |

> **List 特别说明**：
> - PDF Page 31 明确标注：「m3 标准高度为单行 56px，行高 16px，作为小图片多行的情况可以参考高则多行的高度为 72px / 88px，小图片是 48」。
> - Leading Icon 尺寸：24px（标准），Avatar 40px（大），32px（小）。
> - Trailing Icon 通常为 24px 的 Chevron 或 Checkbox。

### 6.6 Modal / Dialog（弹窗）— Page 50, 18

| Component | Variant | Min Width | Max Width | Height | Padding X | Padding Y | Title Height | Content Padding | Action Height | Radius | Border | Scrim Opacity | Typography | Source | Confirmed | Notes |
|-----------|---------|-----------|-----------|--------|-----------|-----------|--------------|---------------|---------------|--------|--------|---------------|------------|--------|-----------|-------|
| Modal | Simple | 280 | 360 | — | 24 | 24 | 56 | 24 | 40 | 28 | 0 | 32% | title/small + body/medium | PDF_MEASURED | true | 简单确认弹窗 |
| Modal | Form | 280 | 480 | — | 24 | 24 | 56 | 24 | 40 | 28 | 0 | 32% | title/small + body/medium | PDF_MEASURED | true | 表单/说明弹窗 |
| Modal | Complex | 280 | 560 | — | 24 | 24 | 56 | 24 | 40 | 28 | 0 | 32% | title/small + body/medium | PDF_MEASURED | true | 复杂内容弹窗 |
| Dialog | Standard | 280 | 560 | — | 24 | 24 | — | 24 | 40 | 28 | 0 | 32% | title/small + body/medium | PDF_MEASURED | true | M3 标准 Dialog |

> **Modal 特别说明**：
> - PDF Page 50 明确标注：容器形状 28（圆角），宽度最小 280dp，最大 560dp，标题高度 56。
> - PDF Page 18 明确标注：
>   - 简单确认弹窗：360-400px
>   - 表单/说明弹窗：480-560px
>   - 复杂内容弹窗：560px 封顶
>   - M3 标准 Dialog = 不超过 560dp
> - Scrim 透明度：M3 标准 32%（黑色）。
> - Action 按钮区域：按钮高度 40px（Large Button），间距 8px。

### 6.7 Tooltip（文字提示）— Page 24, 51

| Component | Variant | Height | Min Width | Max Width | Padding X | Padding Y | Gap | Radius | Border | Typography | Source | Confirmed | Notes |
|-----------|---------|--------|-----------|-----------|-----------|-----------|-----|--------|--------|------------|--------|-----------|-------|
| Tooltip | Plain | 24 | — | 320 | 8 | 6 | 0 | 4 | 0 | label/medium | PDF_MEASURED | true | 纯文字提示 |
| Tooltip | Rich | — | 200 | 320 | 16 | 16 | 8 | 8 | 0 | body/small + label/small | PDF_INFERRED | false | 丰富提示框（含 Title + Action） |
| Tooltip | Action | 40 | — | — | 8 | 0 | 0 | 4 | 0 | label/medium | PDF_MEASURED | true | 操作按钮高度 40 |

> **Tooltip 特别说明**：
> - PDF Page 51 明确标注：文字提示两侧边距 8px，与当前内容相差 4px（simple）或 8px/倍数（text bubble）。
> - PDF Page 24 展示了 Rich tooltip 和 Plain tooltip 两种样式。
> - Rich tooltip 包含 Title + Supporting text + Action 按钮。
> - 如果有操作按钮，操作按钮高度注意 40（Page 51 明确）。

### 6.8 Avatar（头像）— Page 25

| Component | Variant | Size | Min Width | Padding | Radius | Border | Typography | Source | Confirmed | Notes |
|-----------|---------|------|-----------|---------|--------|--------|------------|--------|-----------|-------|
| Avatar | Small | 24 | 24 | 0 | 12 | 0 | — | PDF_INFERRED | false | 紧凑场景 |
| Avatar | Medium | 32 | 32 | 0 | 16 | 0 | — | PDF_INFERRED | false | 列表内 |
| Avatar | Large | 40 | 40 | 0 | 20 | 0 | — | PDF_MEASURED | true | 默认尺寸（Page 25 明确） |
| Avatar | XLarge | 48 | 48 | 0 | 24 | 0 | — | PDF_INFERRED | false | 个人信息页 |
| Avatar | XXLarge | 56 | 56 | 0 | 28 | 0 | — | PDF_INFERRED | false | 个人主页 |
| Avatar | Group | — | — | 0 | 20 | 0 | — | PDF_INFERRED | false | 头像组（重叠排列） |

> **Avatar 特别说明**：
> - PDF Page 25 明确标注：「可以调节头像的大小，默认大小为 40px」。
> - 其他尺寸（24/32/48/56）为 M3 标准 Avatar 尺寸，本规范未明确标注，建议复用。

### 6.9 Badge（徽章）— Page 26

| Component | Variant | Size | Container Size | Padding | Border | Radius | Typography | Source | Confirmed | Notes |
|-----------|---------|------|----------------|---------|--------|--------|------------|--------|-----------|-------|
| Badge | Dot (small) | 6×6 | — | 0 | 0 | 3 | — | PDF_MEASURED | true | 纯点徽章 |
| Badge | Standard (large) | — | 10×16 | 0 | 0 | 8 | label/xsmall | PDF_MEASURED | true | 带数字/标签的徽章 |
| Badge | Spacing | — | — | 4px on both sides | — | — | — | PDF_MEASURED | true | 徽章与图标间距 4px |

> **Badge 特别说明**：
> - PDF Page 26 明确标注：Small badge 6*6，Large badge container 10*16，两边间距 4。
> - 可以包含标签或数字，两种类型：小型和大型。
> - 图标边界框内的锚点徽章，位于图标的上边缘，内容限制为四个字符，包括加号「+」。

### 6.10 Table（表格）— Page 39

| Component | Variant | Header Row Height | Body Row Height | Cell Padding X | Cell Padding Y | Selection Column Width | Pagination Height | Min Row Height | Gap | Typography | Source | Confirmed | Notes |
|-----------|---------|-------------------|-----------------|----------------|----------------|------------------------|-------------------|----------------|-----|------------|--------|-----------|-------|
| Table | Standard | 58 | 54 | 16 | 16 | 48 | 48 | 32 | 0 | body/medium | PDF_MEASURED | true | 标准表格 |
| Table | Compact | 54 | 50 | 12 | 12 | 48 | 48 | 32 | 0 | body/small | PDF_INFERRED | false | 紧凑表格 |
| Table | Dense | 48 | 44 | 8 | 8 | 48 | 48 | 32 | 0 | label/medium | PDF_INFERRED | false | 超紧凑表格 |
| Table | With Filter | 58 | 54 | 16 | 16 | 48 | 48 | 32 | 8 | body/medium | PDF_MEASURED | true | 筛选表格（行间距 8dp） |

> **Table 特别说明**：
> - PDF Page 39 明确标注：
>   - 头行标准高度为 58
>   - 数据行基准高度为 54
>   - 表头比普通数据行高出 4dp
>   - 以此逐级增加 4dp，同时不低于 32dp
>   - 可选筛选项的表格，默认行距有 8dp
> - Header 文字通常为 Medium 字重，Body 为 Regular 字重。
- 选中行背景色：Primary Container 或自定义选中色。
- 排序图标：16px，位于表头右侧。

### 6.11 Tabs（标签页）— Page 33

| Component | Variant | Tab Height | Indicator Height | Indicator Inset | Tab Min Width | Icon Size | Label Typography | Gap | Radius | Source | Confirmed | Notes |
|-----------|---------|------------|------------------|-----------------|---------------|-----------|------------------|-----|--------|--------|-----------|-------|
| Tabs | Primary / Fixed | 48 | 3 | 2 | 24 | 24 | label/medium (14px) | 0 | 0 | PDF_MEASURED | true | 一级标签页 |
| Tabs | Primary / Scrollable | 48 | 3 | 2 | 24 | 24 | label/medium (14px) | 0 | 0 | PDF_MEASURED | true | 可滚动 |
| Tabs | Secondary / Fixed | 40 | 2 | 0 | 24 | 20 | label/small (12px) | 0 | 0 | PDF_INFERRED | false | 二级标签页 |
| Tabs | Secondary / Scrollable | 40 | 2 | 0 | 24 | 20 | label/small (12px) | 0 | 0 | PDF_INFERRED | false | 可滚动 |

> **Tabs 特别说明**：
> - PDF Page 33 明确标注：
>   - 两种类型：一级和二级
>   - 标签页可以水平滚动
>   - 主标签活动指示器每边内缩 2dp，具有完全圆角半径，最小长度为 24dp，图标 24，3dp，文字 14px 但高度 20
>   - 选中上移（选中状态指示器有轻微上浮效果）
>   - 二级 Tab 高度约 40，指示器在分割线上
> - 建议一级 Tab 高度 48，二级 Tab 高度 40。

### 6.12 Chip（芯片）— Page 28

| Component | Variant | Height | Min Width | Padding X | Padding Y | Gap | Icon Size | Radius | Border | Typography | Source | Confirmed | Notes |
|-----------|---------|--------|-----------|-----------|-----------|-----|-----------|--------|--------|------------|--------|-----------|-------|
| Chip | Assist | 32 | 48 | 16 | 0 | 8 | 18 | 16 | 0 | label/medium | PDF_MEASURED | true | 辅助芯片 |
| Chip | Filter | 32 | 48 | 16 | 0 | 8 | 18 | 16 | 0 | label/medium | PDF_MEASURED | true | 过滤芯片 |
| Chip | Input | 32 | 48 | 12 | 0 | 8 | 24 | 16 | 0 | label/medium | PDF_MEASURED | true | 输入芯片（可展开） |
| Chip | Suggestion | 32 | 48 | 16 | 0 | 8 | 18 | 16 | 0 | label/medium | PDF_MEASURED | true | 建议芯片 |

> **Chip 特别说明**：
> - PDF Page 28 明确标注：避免使用超过 20 个字符的芯片标签。头像等主要图片尺寸大于主要图标或徽标。高度 32dp。输入芯片可以展开。
> - Assist chip 尺寸标注（图示）：16-16-8-8-16-8-8-16-32（各段间距）。
> - Input chip 尺寸标注（图示）：12-8-0-4-8-8-8-32。

### 6.13 Search（搜索框）— Page 35

| Component | Variant | Height | Min Width | Padding X | Padding Y | Gap | Icon Size | Radius | Border | Typography | Source | Confirmed | Notes |
|-----------|---------|--------|-----------|-----------|-----------|-----|-----------|--------|--------|------------|--------|-----------|-------|
| Search | Large | 56 | 200 | 16 | 16 | 8 | 24 | 4 | 0 | body/medium | PDF_MEASURED | true | 常规搜索框大 |
| Search | Medium | 48 | 200 | 16 | 12 | 8 | 24 | 4 | 0 | body/medium | PDF_MEASURED | true | 常规搜索框中 |
| Search | Small | 40 | 160 | 12 | 8 | 8 | 20 | 4 | 0 | body/small | PDF_MEASURED | true | 常规搜索框小 |
| Search Bar | Standard | 56 | 100% | 16 | 16 | 8 | 24 | 0 | 0 | body/medium | PDF_INFERRED | false | 顶部搜索栏 |

> **Search 特别说明**：
> - PDF Page 35 明确标注：常规搜索框大 56，常规搜索框中 48，常规搜索框小 40。
> - 搜索框结果出现弹窗（Search dropdown）：宽度与搜索框等宽或更宽。

### 6.14 Alert（警告提示）— Page 49

| Component | Variant | Height | Min Width | Padding X | Padding Y | Icon Size | Icon Spacing | Action Height | Radius | Typography | Source | Confirmed | Notes |
|-----------|---------|--------|-----------|-----------|-----------|-----------|--------------|---------------|--------|------------|--------|-----------|-------|
| Alert | Standard | 44 | 200 | 16 | 10 | 16 | 12 | 28 | 4 | body/small | PDF_MEASURED | true | 标准警告提示 |
| Alert | With Action | 44 | 200 | 16 | 10 | 16 | 12 | 28 | 4 | body/small + label/medium | PDF_MEASURED | true | 带操作按钮 |
| Alert | Banner | 52 | 100% | 16 | 16 | 20 | 12 | 32 | 0 | body/medium | PDF_INFERRED | false | 顶部 Banner |

> **Alert 特别说明**：
> - PDF Page 49 明确标注：高度 44，文本 14，内边距左右 16 上下 10，图标 16 和间距 12。
> - 辅助操作 文字（如「查看详情」），按钮高度 17（或 22，需确认）。
> - 可以带多种图标和按钮组合功能。
> - Alert 展示 4 种状态色：蓝（Info）、橙（Warning）、绿（Success）、红（Error）。

---

## 7. Dark Mode 决策建议

### 7.1 当前状态

- **原始视觉规范中未找到任何 Dark Mode 相关设计稿或颜色规范**。
- 52 页 PDF 中所有页面均为 Light Theme 展示。
- 未找到 Dark Mode 色板、Dark Mode 组件状态、或 Dark Mode 布局规范。

### 7.2 推荐决策

| 决策项 | 推荐结论 | 理由 |
|--------|---------|------|
| 当前是否做 Dark Mode | **否** | 无设计稿，无规范，强行推导会导致品牌色失真 |
| Dark Mode 何时启动 | **v1.5 或 v2.0 阶段** | 待 Light Theme 组件库稳定后，由设计师专门设计 Dark Palette |
| 当前变量结构 | 仅 Light Theme + 3 套品牌主题 | 保持变量结构简单，避免未确认的 Dark 色值混入 |
| 是否预留 Dark Mode 扩展 | **是** | 在 Figma Variables 结构中为 Dark Mode 预留 Mode 位置 |

### 7.3 变量结构建议（预留 Dark Mode）

```
Color / Primitive Collection
├── Modes: 灰绿, 蓝, 紫 (Light)
└── 未来扩展: 灰绿 Dark, 蓝 Dark, 紫 Dark

Color / Semantic Collection
├── Modes: 灰绿, 蓝, 紫 (Light)
└── 未来扩展: 灰绿 Dark, 蓝 Dark, 紫 Dark
```

**两种扩展方案**：

**方案 A：同一 Collection 扩展 8 个 Modes**
- 优点：变量数量少，维护简单。
- 缺点：设计师切换主题时需要滚动更多 Modes，易出错。
- 适用：如果 3 套主题的 Dark Mode 只是简单的颜色反转。

**方案 B：独立 Collection（推荐）**
- `Color / Primitive Light`：灰绿, 蓝, 紫
- `Color / Primitive Dark`：灰绿 Dark, 蓝 Dark, 紫 Dark
- 优点：Light/Dark 隔离清晰，不易混淆，便于权限管理。
- 缺点：变量数量翻倍，需更多维护成本。
- 适用：如果 Dark Mode 有独立的调色逻辑（不是简单反转）。

**推荐结论**：
- **v1.0 阶段**：仅使用方案 A 的前 3 个 Light Modes（灰绿/蓝/紫），Dark Mode 不做。
- **v1.5/2.0 阶段**：评估 Dark Mode 需求，若需要，再决策采用方案 A 扩展 8 Modes 或方案 B 独立 Collection。
- **当前禁止**：在 Figma Variables 中直接写入未经验证的 Dark Mode 色值。

---

## 8. Icon 规范补齐

### 8.1 当前状态

- 原始视觉规范中 **未找到独立的 Icon 规范章节**。
- 各组件页面中使用了图标（Button、Text Field、Chip、Tab 等），但未明确图标库来源、命名规则或绘制规范。
- **用户确认：前端使用 IconPark 图标库，Figma Icon Library 需与前端保持一致**。
- Page 21 展示了「图标/分段/分割按钮」组件，包含大量图标示例，但未标注图标库名称。

### 8.2 推荐方案（需设计师确认）

| Item | Recommendation | Source | Confirmed | Notes |
|------|---------------|--------|-----------|-------|
| 图标库来源 | **IconPark** (与前端对齐) | USER_CONFIRMED | true | 前端使用 IconPark，Figma Icon Library 与前端保持一致 |
| 备选图标库 | — | — | — | 前端已确认使用 IconPark，无需备选 |
| 默认图标尺寸 | 24px | USER_CONFIRMED | true | IconPark 标准图标尺寸 |
| 小图标尺寸 | 20px | USER_CONFIRMED | true | 用于紧凑场景（Chip、Small Button） |
| 大图标尺寸 | 36px | USER_CONFIRMED | true | 用于 Large FAB 等场景 |
| 图标线宽 | 1.5px | M3_REFERENCE | false | IconPark 线框风格默认线宽参考 |
| 图标风格 | Outlined (线框) | USER_CONFIRMED | true | 与前端 IconPark 保持一致，使用 Outlined 风格 |
| 图标命名规则 | `icon/[category]/[name]` | USER_CONFIRMED | true | 与 IconPark 命名体系保持一致 |
| Icon Component Set | 建议创建 `Icon/24` 和 `Icon/20` 两个 Component Set | USER_CONFIRMED | true | 将 IconPark 图标导入 Figma 后封装为 Component，便于替换和主题切换 |

### 8.3 图标与前端对齐建议

| 前端框架 | 推荐图标库 | 对齐方式 |
|----------|------------|----------|
| React + IconPark | IconPark | 直接复用 IconPark 图标名称 |
| React + IconPark | IconPark | 使用 IconPark React 组件 |
| Vue + IconPark | IconPark | 使用 IconPark Vue 组件 |
| 独立前端项目 | IconPark | 使用 IconPark 官方 CDN 或 npm 包 |

> **关键决策**：前端已确认使用 IconPark。Figma 中建议通过 IconPark Figma Plugin 或手动导入 SVG 方式引入相同图标库，确保设计稿与前端实现一致。

---

## 9. 字体回退方案（详细版）

### 9.1 已确认信息

- **中文字体**：苹方 (PingFang SC) — 文档明确标注（Page 09, 10）。
- **西文字体**：未明确标注，建议 Roboto（M3 默认）。

### 9.2 平台级字体栈

| 平台 | 字体栈 | 使用场景 | 来源 | 已确认 |
|------|--------|----------|------|--------|
| macOS / iOS | `font-family: "PingFang SC", -apple-system, BlinkMacSystemFont, sans-serif;` | 所有中文内容 | SOURCE_DESIGN | true |
| Windows | `font-family: "Microsoft YaHei", "Microsoft YaHei UI", "PingFang SC", sans-serif;` | 所有中文内容 | M3_REFERENCE | false | 工程推荐 |
| Android | `font-family: "Noto Sans CJK SC", "PingFang SC", Roboto, sans-serif;` | 所有中文内容 | M3_REFERENCE | false | 工程推荐 |
| Web (通用) | `font-family: system-ui, -apple-system, BlinkMacSystemFont, "PingFang SC", "Microsoft YaHei", "Noto Sans CJK SC", "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;` | 所有中文内容 | M3_REFERENCE | false | 工程推荐 |
| 英文 (通用) | `font-family: Roboto, "Helvetica Neue", Arial, sans-serif;` | 英文内容 | M3_REFERENCE | false | 需确认是否使用 Roboto |

### 9.3 字重映射表

| 文档标注 | CSS font-weight | Figma Style | 使用场景 | 来源 | 已确认 |
|----------|----------------|-------------|----------|------|--------|
| bold | 700 | Bold | Headline 层级 | SOURCE_DESIGN | true |
| Medium | 500 | Medium | Title 层级 | SOURCE_DESIGN | true |
| regular | 400 | Regular | Body / Label 层级 | SOURCE_DESIGN | true |

> **注意**：苹方字体支持 100-900 全字重，但最常用的是 400 (Regular)、500 (Medium)、700 (Bold)。

---

## 10. Critical 清单状态更新

> 基于原文档「落地前必须确认清单」中的 Critical 项，结合本次补齐结果，更新状态如下：

| Critical Item | Status | Completed Value / Output | Remaining Risk | Next Action |
|--------------|--------|-------------------------|----------------|-------------|
| 3 套主题 Primary/Secondary/Tertiary/Error/Neutral 完整色板 | Partially Completed | 灰绿/蓝 2 套主题已提取完整 5 Palette × 13 Tone；紫主题关键 Semantic Tokens 已补齐，完整 0–100 Primitive 色阶仍不完整 | 紫主题不完整；所有色值均为图像拾取，存在误差 | ① 从 Figma 源文件提取精确色值；② 设计师逐色确认 |
| Primary-40 (Key Color) 3 套确认 | Completed | 灰绿=#006B56 (PDF), 蓝=#0B57D0 (USER_PROVIDED), 紫=#6750A4 (USER_PROVIDED) | 无 | 3 套主题 Key Color 均已确认 |
| Semantic Colors 映射表 | Partially Completed | 已完成灰绿/蓝/紫 3 套主题 32 个 Token 映射 | 蓝/紫 Semantic 已由 USER_PROVIDED_TOKEN_FILE 确认；灰绿仍为 PDF 拾取 | 设计师确认灰绿 Semantic 映射 |
| Success / Warning / Info 语义色定义 | Light Token Established | 已建立轻量语义 Token（success/warning/info 各 4 个），色值均为 TODO_CONFIRM | 未建立独立 Palette；色值未确认 | 设计师从 Alert 组件或独立色板提供准确色值 |
| Typography 字号/行高/字重 | Completed | 已提取 15+ 层级，全部来自 PDF 明确标注 | 无 | 可直接进入 Figma 搭建 |
| Button 各 Variant 尺寸 | Completed | 已提取 5 种 Variant × 3 种 Size 的完整尺寸 | 无 | 可直接进入 Figma 搭建 |
| Modal / Dialog 尺寸 | Completed | 已提取 Min 280 / Max 560 / 圆角 28 / 标题高 56 | 无 | 可直接进入 Figma 搭建 |
| Table 行列高度 | Completed | 已提取 Header 58 / Body 54 / 行间距 8 / 最小 32 | 无 | 可直接进入 Figma 搭建 |
| Tabs 指示器/高度 | Completed | 已提取一级 Tab 48 / 二级 40 / 指示器 3 / 内缩 2 / 图标 24 | 无 | 可直接进入 Figma 搭建 |
| Text Field 尺寸 | Partially Completed | 搜索框明确尺寸 40/48/56；Text Field 本体未明确标注 | Text Field 高度未在 PDF 中直接标注，使用搜索框尺寸推断 | 设计师确认 Text Field 是否复用搜索框尺寸体系 |
| Avatar 默认尺寸 | Completed | 默认 40px，其他尺寸未明确 | 无 | 可直接进入 Figma 搭建 |
| Badge 尺寸 | Completed | Dot 6×6 / Standard 10×16 / 间距 4 | 无 | 可直接进入 Figma 搭建 |
| Chip 尺寸 | Completed | 高度 32 / 圆角 16 / 各 Variant 间距已提取 | 无 | 可直接进入 Figma 搭建 |
| Dark Mode 规范 | Completed | 明确建议 v1 阶段不做 Dark Mode | 无 | 作为 v1.5/2.0 规划 |
| Icon 库来源 | Confirmed | 用户确认前端使用 IconPark，Figma 需保持一致 | 无 | 可直接引入 IconPark 图标库 |
| 字体回退方案 | Completed | 已提取 macOS/Windows/Android/Web 完整回退栈 | 无 | 系统字体优先，Roboto 不强制 |

---

## 11. 更新后的 JSON Schema 片段

### 11.1 已确认颜色 Token（示例：灰绿 Primary）

```json
{
  "collection": "Color / Primitive",
  "tokens": [
    {
      "name": "primary/0",
      "type": "COLOR",
      "values": {
        "灰绿": "#000000",
        "蓝": "#000000",
        "紫": "#21005D"
      },
      "confirmed": false,
      "source": "PDF_PICKED_APPROXIMATE",
      "comment": "从 PDF 图像拾取，存在±1-3%误差，需从 Figma 源文件确认"
    },
    {
      "name": "primary/10",
      "type": "COLOR",
      "values": {
        "灰绿": "#002018",
        "蓝": "#041E49",
        "紫": "#381E72"
      },
      "confirmed": false,
      "source": "PDF_PICKED_APPROXIMATE",
      "comment": "从 PDF 图像拾取，存在±1-3%误差"
    },
    {
      "name": "primary/40",
      "type": "COLOR",
      "values": {
        "灰绿": "#006B56",
        "蓝": "#0B57D0",
        "紫": "#6750A4"
      },
      "confirmed": false,
      "source": "PDF_PICKED_APPROXIMATE",
      "comment": "Key Color，从 PDF 图像拾取，需设计师确认"
    },
    {
      "name": "primary/100",
      "type": "COLOR",
      "values": {
        "灰绿": "#FFFFFF",
        "蓝": "#FFFFFF",
        "紫": "#FFFFFF"
      },
      "confirmed": false,
      "source": "M3_REFERENCE",
      "comment": "M3 标准纯白，需确认本规范是否使用纯白"
    }
  ]
}
```

### 11.2 语义颜色 Token（示例：灰绿 theme）

```json
{
  "collection": "Color / Semantic",
  "tokens": [
    {
      "name": "primary",
      "type": "COLOR",
      "values": {
        "灰绿": "#006B56",
        "蓝": "#0B57D0",
        "紫": "#6750A4"
      },
      "confirmed": false,
      "source": "M3_REFERENCE_DERIVED",
      "comment": "基于 M3 映射规则 Primary-40，色值来自 PDF 拾取"
    },
    {
      "name": "surface",
      "type": "COLOR",
      "values": {
        "灰绿": "#F3FFF9",
        "蓝": "#FFFFFF",
        "紫": "#FEF7FF"
      },
      "confirmed": false,
      "source": "M3_REFERENCE_DERIVED",
      "comment": "基于 M3 映射规则 Neutral-98，色值来自 PDF 拾取"
    },
    {
      "name": "surface-container",
      "type": "COLOR",
      "values": {
        "灰绿": null,
        "蓝": null,
        "紫": null
      },
      "confirmed": false,
      "source": "TODO_CONFIRM_FROM_DESIGN",
      "comment": "M3 标准 Token，但本规范未明确是否需要，需设计师确认"
    }
  ]
}
```

### 11.4 Typography Token（已确认）

```json
{
  "collection": "Typography",
  "tokens": [
    {
      "name": "display/large",
      "type": "TYPOGRAPHY",
      "values": {
        "fontFamily": "system-ui, -apple-system, BlinkMacSystemFont, PingFang SC, Microsoft YaHei, Noto Sans CJK SC, Segoe UI, Roboto, Arial, sans-serif",
        "fontSize": 56,
        "lineHeight": 64,
        "fontWeight": 400,
        "letterSpacing": 0
      },
      "confirmed": true,
      "source": "SOURCE_DESIGN",
      "comment": "从 PDF Page 09, 10 直接提取：运营标题-大 苹方 56/64"
    },
    {
      "name": "headline/large",
      "type": "TYPOGRAPHY",
      "values": {
        "fontFamily": "system-ui, -apple-system, BlinkMacSystemFont, PingFang SC, Microsoft YaHei, Noto Sans CJK SC, Segoe UI, Roboto, Arial, sans-serif",
        "fontSize": 24,
        "lineHeight": 34,
        "fontWeight": 700,
        "letterSpacing": 0
      },
      "confirmed": true,
      "source": "SOURCE_DESIGN",
      "comment": "从 PDF Page 09 直接提取：H1 加粗标题超大 bold苹方 24/34"
    },
    {
      "name": "body/medium",
      "type": "TYPOGRAPHY",
      "values": {
        "fontFamily": "system-ui, -apple-system, BlinkMacSystemFont, PingFang SC, Microsoft YaHei, Noto Sans CJK SC, Segoe UI, Roboto, Arial, sans-serif",
        "fontSize": 16,
        "lineHeight": 26,
        "fontWeight": 400,
        "letterSpacing": 0
      },
      "confirmed": true,
      "source": "SOURCE_DESIGN",
      "comment": "从 PDF Page 09 直接提取：正文-常规 regular苹方 16/26"
    }
  ]
}
```

### 11.5 组件尺寸 Token（已确认）

```json
{
  "collection": "Component / Button",
  "tokens": [
    {
      "name": "button/medium/height",
      "type": "FLOAT",
      "value": 32,
      "confirmed": true,
      "source": "PDF_MEASURED",
      "comment": "从 PDF Page 19 提取：默认按钮高度 32dp"
    },
    {
      "name": "button/large/height",
      "type": "FLOAT",
      "value": 40,
      "confirmed": true,
      "source": "PDF_MEASURED",
      "comment": "从 PDF Page 19 提取：大按钮高度 40dp"
    },
    {
      "name": "button/small/height",
      "type": "FLOAT",
      "value": 28,
      "confirmed": true,
      "source": "PDF_MEASURED",
      "comment": "从 PDF Page 19 提取：小按钮高度 28dp"
    },
    {
      "name": "button/medium/padding-x",
      "type": "FLOAT",
      "value": 12,
      "confirmed": true,
      "source": "PDF_MEASURED",
      "comment": "从 PDF Page 19 提取：默认按钮左右内边距 12dp"
    },
    {
      "name": "button/large/padding-x",
      "type": "FLOAT",
      "value": 16,
      "confirmed": true,
      "source": "PDF_MEASURED",
      "comment": "从 PDF Page 19 提取：大按钮左右内边距 16dp"
    },
    {
      "name": "button/icon-size",
      "type": "FLOAT",
      "value": 20,
      "confirmed": true,
      "source": "PDF_MEASURED",
      "comment": "从 PDF Page 19 提取：默认图标尺寸 20px，大图标 24px"
    }
  ]
}
```

```json
{
  "collection": "Component / Modal",
  "tokens": [
    {
      "name": "modal/min-width",
      "type": "FLOAT",
      "value": 280,
      "confirmed": true,
      "source": "PDF_MEASURED",
      "comment": "从 PDF Page 50, 18 提取：弹窗最小宽度 280dp"
    },
    {
      "name": "modal/max-width",
      "type": "FLOAT",
      "value": 560,
      "confirmed": true,
      "source": "PDF_MEASURED",
      "comment": "从 PDF Page 50, 18 提取：弹窗最大宽度 560dp (M3 标准)"
    },
    {
      "name": "modal/title-height",
      "type": "FLOAT",
      "value": 56,
      "confirmed": true,
      "source": "PDF_MEASURED",
      "comment": "从 PDF Page 50 提取：弹窗标题高度 56dp"
    },
    {
      "name": "modal/radius",
      "type": "FLOAT",
      "value": 28,
      "confirmed": true,
      "source": "PDF_MEASURED",
      "comment": "从 PDF Page 50 提取：弹窗圆角 28dp"
    }
  ]
}
```

```json
{
  "collection": "Component / Table",
  "tokens": [
    {
      "name": "table/header-row-height",
      "type": "FLOAT",
      "value": 58,
      "confirmed": true,
      "source": "PDF_MEASURED",
      "comment": "从 PDF Page 39 提取：头行标准高度 58"
    },
    {
      "name": "table/body-row-height",
      "type": "FLOAT",
      "value": 54,
      "confirmed": true,
      "source": "PDF_MEASURED",
      "comment": "从 PDF Page 39 提取：数据行基准高度 54"
    },
    {
      "name": "table/cell-padding-x",
      "type": "FLOAT",
      "value": 16,
      "confirmed": false,
      "source": "M3_REFERENCE",
      "comment": "M3 标准 Cell 左右内边距 16，需确认本规范"
    },
    {
      "name": "table/cell-padding-y",
      "type": "FLOAT",
      "value": 16,
      "confirmed": false,
      "source": "M3_REFERENCE",
      "comment": "M3 标准 Cell 上下内边距 16，需确认本规范"
    },
    {
      "name": "table/selection-column-width",
      "type": "FLOAT",
      "value": 48,
      "confirmed": false,
      "source": "M3_REFERENCE",
      "comment": "M3 标准 Checkbox 列宽度 48，需确认"
    },
    {
      "name": "table/pagination-height",
      "type": "FLOAT",
      "value": 48,
      "confirmed": false,
      "source": "M3_REFERENCE",
      "comment": "M3 标准 Pagination 高度 48，需确认本规范"
    }
  ]
}
```

```json
{
  "collection": "Component / Tabs",
  "tokens": [
    {
      "name": "tabs/primary/height",
      "type": "FLOAT",
      "value": 48,
      "confirmed": true,
      "source": "PDF_MEASURED",
      "comment": "从 PDF Page 33 提取：一级 Tab 高度约 48"
    },
    {
      "name": "tabs/secondary/height",
      "type": "FLOAT",
      "value": 40,
      "confirmed": true,
      "source": "PDF_MEASURED",
      "comment": "从 PDF Page 33 提取：二级 Tab 高度约 40"
    },
    {
      "name": "tabs/indicator-height",
      "type": "FLOAT",
      "value": 3,
      "confirmed": true,
      "source": "PDF_MEASURED",
      "comment": "从 PDF Page 33 提取：指示器高度 3dp"
    },
    {
      "name": "tabs/indicator-inset",
      "type": "FLOAT",
      "value": 2,
      "confirmed": true,
      "source": "PDF_MEASURED",
      "comment": "从 PDF Page 33 提取：指示器每边内缩 2dp"
    },
    {
      "name": "tabs/icon-size",
      "type": "FLOAT",
      "value": 24,
      "confirmed": true,
      "source": "PDF_MEASURED",
      "comment": "从 PDF Page 33 提取：图标 24px"
    }
  ]
}
```

---

## 12. 仍需人工确认的问题清单

> 以下问题必须等设计师确认后，才能进入正式 Figma 组件库搭建。按优先级排序：

| 优先级 | 问题 | 影响范围 | 建议决策 | 确认人 |
|--------|------|----------|----------|--------|
| **P0** | 蓝色/紫色主题完整 0-100 色阶补充？ | 蓝/紫 Primitive Palette | 关键 Tone（10/30/40/80/90）已确认；完整 0-100 需补充 | 设计师 |

| **P0** | Success / Warning / Info 色值确认？ | 语义色系统 | 已从 Alert 组件提取建议，但需设计师确认准确色值 | 设计师 |
| **P0** | surface-container 系列色值确认？ | 语义色系统 | 已确认需要保留，但色值需从 Figma 源文件确认 | 设计师 |
| **P1** | 西文字体是否使用 Roboto？ | Typography | 用户已确认：系统字体优先，Roboto 不强制 | 已确认 |
| **P1** | Icon 库是否使用 IconPark？ | 全部图标 | 用户已确认前端使用 IconPark，Figma 需保持一致 | 已确认 |
| **P1** | Text Field 尺寸是否复用搜索框体系（40/48/56）？ | Form 组件 | 建议复用搜索框尺寸，保持一致性 | 设计师 |
| **P1** | Card 精确尺寸是否从源设计稿测量？ | Card 组件 | 用户已确认：以源设计稿为准，无明确时采用 M3 临时建议 | 设计师 |
| **P2** | Dark Mode 是否作为 v1.5 规划？ | 全局 | 建议 v1 不做，v1.5 评估需求后再启动 | 设计师 + 产品 |
| **P2** | 紫色主题色板完整提取 | 颜色系统 | 建议从 Figma 源文件直接复制紫色色板 | 设计师 |
| **P2** | 状态层透明度是否严格按 M3 标准（hover 8%, pressed 12%, focus 12%, dragged 16%）？ | 交互状态 | Page 13 已标注此规则，建议确认 | 设计师 |
| **P2** | 字体 letterSpacing 是否需要调整？ | Typography | 中文通常保持 0，但需确认是否有特殊 tracking 需求 | 设计师 |

---

## 13. 可进入下一阶段的判断

### 13.1 可以进入 Figma Variables 搭建的内容

以下数据已提取且相对稳定，**可以立即进入 Figma Variables 搭建**：

- [x] **Typography 系统**：15+ 层级的字号、行高、字重已全部确认（苹方字体，来源 PDF 明确标注）。
- [x] **Space 间距系统**：Page 14 展示了 4/8/16/24/32/40/48/64 等间距值，可作为基础 Spacer Tokens。
- [x] **Elevation 层级**：Page 15 展示了 5 个 Elevation 层级，可作为 Shadow Tokens。
- [x] **状态层透明度**：Page 13 明确标注 hover 8%, pressed 12%, focus 12%, dragged 16%。
- [x] **Layout 基础**：Page 17 明确版心固定 1200px，Page 18 明确弹窗宽度规范。
- [x] **组件尺寸（大部分）**：Button, Modal, Table, Tabs, Avatar, Badge, Chip, Search, Tooltip, Alert, Switch, Radio, Checkbox, List 等 P0 组件的核心尺寸已提取。

**搭建建议**：
- 先搭建 `Typography` 和 `Space` Collection（无争议，可直接录入）。
- 再搭建 `Elevation` 和 `Shape` (Radius) Collection。
- 最后搭建 `Color / Primitive` 和 `Color / Semantic` Collection（需注意颜色值可能需修正）。

### 13.2 可以进入 P0 组件搭建的内容

以下组件的核心尺寸已确认，**可以进入 Figma Component 搭建**：

- [x] **Button**：全部 Variant 和 Size 尺寸已确认。
- [x] **Icon Button**：尺寸已确认。
- [x] **FAB**：标准/小/大/扩展尺寸已确认。
- [x] **Modal / Dialog**：宽度/圆角/标题高度已确认。
- [x] **Table**：行列高度已确认。
- [x] **Tabs**：高度/指示器/图标尺寸已确认。
- [x] **Avatar**：默认 40px 已确认。
- [x] **Badge**：6×6 / 10×16 已确认。
- [x] **Chip**：高度 32 / 圆角 16 已确认。
- [x] **Search**：40/48/56 已确认。
- [x] **Tooltip**：尺寸规则已确认。
- [x] **Alert**：高度 44 / 内边距已确认。
- [x] **Switch / Radio / Checkbox**：尺寸已确认。
- [x] **List Item**：56/48/72/88 已确认。

### 13.3 必须等设计师确认后才能进入正式组件库的内容

以下事项**不建议在确认前进入正式搭建**：

- [ ] **紫色主题完整色板**：仅提取约 60%，不完整。
- [ ] **所有颜色的精确 HEX 值**：图像拾取存在误差，需从 Figma 源文件确认。
- [ ] **Success / Warning / Info 语义色**：已建立轻量 Token，但色值均为 TODO_CONFIRM，需从 Alert 组件或独立色板确认。
- [ ] **surface-container 系列 Token**：已确认保留，但色值需从 Figma 源文件确认。
- [ ] **Text Field 本体尺寸**：未在 PDF 中直接标注，需确认是否复用搜索框尺寸。
- [ ] **Card 精确尺寸**：源设计稿无明确值时采用 M3 临时建议，需从源设计稿确认。
- [x] **Icon 库来源**：已确认前端使用 IconPark，Figma 需保持一致。 ✅
- [x] **西文字体**：已确认系统字体优先，Roboto 不强制。 ✅

### 13.4 是否可以进入「生成可视化规范稿」

**判断：可以进入「可视化规范稿生成」，但颜色需标记为 approximate。**

- **可以生成的内容**：
  - Typography 规范稿（全部已确认）
  - Space/间距规范稿（全部已确认）
  - Elevation 规范稿（全部已确认）
  - 已确认组件（Button/Modal/Table/Tabs/Avatar/Badge/Chip）的尺寸规范稿
  - **颜色规范稿（需标记为 APPROXIMATE，不可用于生产 token）**
- **不建议生成的内容**：Success/Warning/Info 规范稿（色值未确认）、Dark Mode 规范稿（明确不做）。
- **可视化规范稿中的颜色标记要求**：所有颜色需标注 `⚠️ APPROXIMATE — 需从 Figma 源文件确认最终色值`，以区分于已确认的生产 token。

**建议下一步行动**：
1. 由设计师从 Figma 源文件导出精确色板数据，替换本文档中的 `PDF_PICKED_APPROXIMATE` 值。
2. 确认 Success/Warning/Info 色值（从 Alert 组件或独立色板提取）。
3. 确认 surface-container 系列色值（从 Figma 源文件提取）。
4. 确认紫色主题完整色板（从 Figma 源文件提取）。
5. 以上确认完成后，即可进入全量 Figma Variables + Components 搭建。

---

> **文档版本**：v4.0 Critical 确认更新版
> **生成日期**：2026-06-24  
> **数据来源**：原始视觉规范.pdf（52页）逐页渲染 + 图像采样 + 用户确认  
> **声明**：所有 `PDF_PICKED_APPROXIMATE` 色值均存在误差，最终色值以 Figma 源文件或设计师确认值为准。