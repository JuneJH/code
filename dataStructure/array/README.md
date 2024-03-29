# 数组

- 数组是一组连续的物理空间存储数据。
- 数组在创建时需要指定长度（JavaScript 中的数组是动态数组）。
- 由于数组中的元素在内存中是连续存储的，因此可以通过任何一个索引计算出真实地址，实现 O(1) 的数据读取。

## 1. 数组的特性

1. 连续的内存空间： 数组中的元素在内存中是连续存储的，这意味着可以通过索引高效地访问数组中的元素
2. 固定或动态长度： 大多数编程语言中，数组在创建时需要指定长度，且长度通常是固定的。然而，也有一些语言支持动态数组，可以在运行时动态调整数组的大小。
3. 随机访问： 由于数组中的元素在内存中是连续存储的，因此可以通过索引进行随机访问，时间复杂度为 O(1)。
4. 相同类型的元素： 数组中通常只能存储相同类型的元素，这是因为数组中的元素在内存中是连续存储的，需要保证每个元素占用的空间大小相同。
5. 空间复杂度： 数组的空间复杂度是 O(n)，其中 n 是数组的长度，因为需要连续的内存空间来存储所有元素。
6. 高效的内存管理： 由于数组中的元素是连续存储的，因此在内存管理方面比较高效。然而，动态数组可能会涉及到内存重新分配和数据复制的操作，因此需要额外的开销。
7. 不支持动态插入和删除： 由于数组是连续存储的，插入和删除操作可能需要移动其他元素，因此效率较低。通常情况下，不建议频繁进行插入和删除操作。

