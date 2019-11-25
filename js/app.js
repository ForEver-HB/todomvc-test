;
(function () {
	const todos = [{
			id: 1,
			title: '吃饭',
			done: true
		},
		{
			id: 2,
			title: '吃饭2',
			done: false
		},
		{
			id: 3,
			title: '吃饭',
			done: true
		},
		{
			id: 4,
			title: '吃饭sfs',
			done: true
		}
	]
	new Vue({
		el: '#todoapp',
		data: {
			todos: todos,//任务列表数据源
			inputText: '',//用来绑定获取添加任务文本框
			currentEdit: null,//用来判定任务项是否获得editing样式的
			backTitle: ''//仅仅用于备份我们的编辑之前的任务项的title,编辑之前的先备份，取消编辑回退
		},
		methods: {
			// 添加任务项
			addTodo(e) {
				console.log(this.inputText)
				// 拿到文本框数据
				const {
					inputText,
					todos
				} = this

				// 非空校验
				if (inputText.trim().length === 0) {
					return
				}

				// 获取唯一的id
				const lastItem = todos[todos.length - 1]
				const ud = lastItem ? lastItem.id + 1 : 1

				// 添加到数组中
				this.todos.push({
					id: 5,
					title: this.inputText,
					done: false
				})

				// 清空文本框数据
				this.inputText = ''
			},

			// 
			removeTodo(index) {
				// console.log(123)
				this.todos.splice(index, 1)
			},

			getEditing(item) {
				// 为了处理取消编辑所以这里在获得编辑状态的时候先备份，用于
				// 在取消编辑的时候文本回到原始状态
				this.currentEdit = item
				this.backTitle = item.title
			},

			// 回车或者失去焦点保存数据
			saveEdit(item,index) {
				// console.log('保存编辑');
				if (item.title.trim().length === 0) {
					// 执行删除操作
					this.todos.splice(index, 1)
				} else {
					this.currentEdit = null
				}
			},

			// esc取消编辑
			cancelEdit(item,index) {
				// 让任务项的title归原始数据
				// 去除编辑样式
				this.currentEdit.title = this.backTitle
				this.currentEdit = null
			}
		}
	})
})()
