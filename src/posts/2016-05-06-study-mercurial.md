---
title: GitのアレをMercurialでやる
date: "2016-05-06T00:00:00.000Z"
description: Mercurial (hg) 勉強メモ
tags:
  - git
  - mercurial
---

Mercurial (hg) 勉強メモ

## `$ git add filename; git commit` をMercurialで

特定のファイルだけステージしてコミットしたいとき。

```shell
$ hg commit filename
```

サブコマンドcommitの引数にファイル名を与えることで可能。  
(git add filename に相当する操作はないっぽい)

-----

## `$ git add -p filename` をMercurialで

ファイルの一部分だけステージしたいとき (partial staging)

```shell
$ hg commit --interactive filename
```

サブコマンドcommitに`--interactive`オプションを追加することで可能。  
※古いバージョンならrecord extensionでやる必要がある
