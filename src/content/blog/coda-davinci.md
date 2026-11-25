---
title: 'Coda-Davinci'
description: '记录 Coda-Davinci 对 3D Proxy 粒度、物理仿真和提示词的实验，以及我用 Wan 和 H3 生成机械臂视频时遇到的问题。'
pubDate: '2026-11-25T12:00:00Z'
category: 'note'
tags: ['3D Proxy', '视频生成', '提示词']
---

要解决的问题：

how to construct proxies and prompts for optimal downstream quality.

备注：

他们没有训练视频生成模型

视频生成模型给条件：prompt+proxy

但是怎么构建好的prompt和proxy呢？

文章得到的结论

1. 3D引导并不比直接生成好

我们现在费尽心思构建了align很好的3D，但是可能不如视频生成模型一开始的能力

2. 3D Proxy不是越细粒度越好

论文实验：

粗粒度=>只建模位置，朝向=>人体动作更自然

中粒度=>建模主要几何形状=>场景一致性更好

细粒度=>生成不自然

3. 物理仿真整体上带来帮助
4. 让写3D代码的Agent同时写prompt，效果更好
5. 有选择地使用3D

| 内容               | 由谁负责    |
| ------------------ | ----------- |
| 场景，物体位置     | 3D Agent    |
| 人物位置和方向     | 3D Agent    |
| 刚体碰撞和物理过程 | Blender     |
| 细微动作           | World Model |
| 材质、纹理         | World Model |



3D Proxy是一种 frame wise的受控视频生成，让wm自由发挥的好处是能够带来仿真做不到，或者需要比较高的代价得到的物理动效；

但是本身可能比较依赖prompt，而且跟基础模型也强相关；我使用了Wan去做生成，得到的效果并不好；H3能够做的很好，但是好像其实还是不够。。

总共是几个条件，首帧和3D Proxy已经动不了了，这里能够做的就是改很好的prompt；感觉tune模型是有风险的，可能灾难性遗忘；

那么，prompt怎么做？要描述好物体的运动，描述好机械臂的开合，夹住没有，其他的好像就不用了；其实是一种**把强大的VLM通过H3转化成视觉表示**；（这个还没有看看有没有人做）

还有就是prompt的问题，怎么得到一个描述运动的expert呢？

有一些文章致力于研究：

> 利用强大的 VLM / MLLM 的视觉理解、常识推理和规划能力，去弥补视频生成模型在指令理解、时序规划、物理常识方面的不足，从而在不重新训练视频模型的情况下，让它生成更好的视频。

VISTA





1. 白膜粒度给多细

完全细致 => world model 做上色 （已经有比较多工作，建模细致的场景需要大量迭代）

coarse => 如何coarse，闭环怎么做，结果由谁来给（仿真器，world model，写prompt的vlm）

1. 视频模型需要训练吗

zero shot情况下，Wan表现很差，H3还可以

训练需要data，data怎么来

1. 怎么给prompt
