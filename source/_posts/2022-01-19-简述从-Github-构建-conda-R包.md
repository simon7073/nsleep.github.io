---
title: 简述从 Github 构建 conda R包
date: 2022-01-19 17:02:00
tags:
categories:
---
> 示例/目的：安装R包 **NMF**
> 环境：*CentOS 7 , Miniconda3,  R 4.1.2 .*

<!-- more -->


# 正文
当前 conda 里最新的 `r-nmf`包版本是 `0.21`，而`Github`中的版本是 `0.30`, 我所安装的某R包需要依赖 `nmf>=0.23`

为了容易复现，将创建一个新的 conda 环境，同时也建议单独把构建环境隔离出来。
```bash
conda create -n conda-build conda-build conda-verify
conda skeleton cran https://github.com/renozao/NMF
conda build -c conda-forge -c bioconda --R 4.1.2 r-nmf
conda install -n r-base -c ${CONDA_PREFIX}/conda-bld r-nmf
```

1. 在名为 **conda-build** 环境里安装 `conda-build` 包 和` conda-verify（可选）`
2. `conda skeleton cran` 将构建一个R包的骨架包（skeleton package [^1]），会从 Github缓存裸存储库（bare repository），并在家目录`~/`准备conda-build配方（conda recipe[^2]）
3. 准备完成就可以用`conda build`创建conda包，此处声明了依赖的源有conda-forge和bioconda，且使用4.1.2版本的R编译。
4. 最后用`conda install`安装就可以了。此处生成的conda包的路径是`/opt/miniconda3/envs/conda-build/conda-bld`，环境变量`${CONDA_PREFIX}`是当前所激活的虚拟环境的路径。

# 备注
详细信息可以查 conda的[官方文档](https://docs.conda.io) /[Github](https://github.com/conda/conda)/各种 issue 或者 `conda 命令 --help`

> [conda Github](https://github.com/conda/conda)
> [NMF Github](https://github.com/renozao/NMF)
> [r-nmf anaconda](https://anaconda.org/conda-forge/r-nmf) 
> [conda-build 官方文档](https://docs.conda.io/projects/conda-build/en/latest/user-guide/tutorials/index.html)
> [我常用的 conda 环境--.condarc的配置](https://blog.csdn.net/SimonC17/article/details/122583145#t4)

[^1]:在官方文档中查看 [skeleton package](https://docs.conda.io/projects/conda-build/en/latest/user-guide/tutorials/build-r-pkgs.html#building-a-simple-package-with-conda-skeleton-cran)
[^2]:此处conda recipe 为`~/r-nmf`，目录下有`bld.bat`  `build.sh`  `meta.yaml` 三个文件
