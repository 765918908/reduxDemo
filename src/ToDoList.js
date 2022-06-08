import React, { Component } from 'react';
import 'antd/dist/antd.css'
import { Button, Input, List } from 'antd'
import store from './store';

class ToDoList extends Component {
    constructor(props) {
        super(props)
        this.state = store.getState()
        this.storeChange = this.storeChange.bind(this)
        store.subscribe(this.storeChange)
    }
    storeChange() {
        this.setState(store.getState())
    }
    render() {
        return (
            <div style={{ margin: '20px' }}>
                <div style={{ marginBottom: '10px' }}>
                    <Input style={{ width: '300px' }} placeholder='输入些什么'></Input>
                    <Button type='primary'>增加</Button>
                </div>
                <div>
                    <List
                        bordered
                        dataSource={store.list}
                        renderItem={item => (
                            <List.Item>
                                {item}
                            </List.Item>
                        )}
                    />
                </div>
            </div>
        )
    }
}

export default ToDoList