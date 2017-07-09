import React from 'react';
import { Toast, WhiteSpace, WingBlank, Button } from 'antd-mobile';

//Toast.xx(content, duration, onClose, mask);
//content: 提示内容
//duration: 自动关闭的延时, 单位秒
//  为0时，onClose无效，toast不消失，需手动调用hide隐藏
//onClose: 关闭后回调（默认null）
//mask: 是否显示透明图层，防止触摸穿透（默认true）
function showToast() {
    Toast.info('这是一个 toast 提示!!!', 1);
}

function showToastNoMask() {
    Toast.info('无 mask 的 toast !!!', 2, null, false);
}

function successToast() {
    Toast.success('加载成功!!!', 1);
}

function failToast() {
    Toast.fail('加载失败!!!', 1);
}

function offline() {
    Toast.offline('网络连接失败!!!', 1);
}

function loadingToast() {
    Toast.loading('加载中...', 1, () => {
        console.log('加载完成!!!');
    });
}

function outClose() {
    Toast.loading('加载中...', 0);
    let timer = setTimeout(() => {
        Toast.hide();
        timer || clearTimeout(timer);
    },3000);
}

class AntToast extends React.Component {
    static navigationOptions = {
        title: 'Toast 轻提示'
    }

    render() {
        return (
            <WingBlank>
                <WhiteSpace />
                <Button onClick={showToast}>纯文字 toast</Button>
                <WhiteSpace />
                <Button onClick={showToastNoMask}>无 mask</Button>
                <WhiteSpace />
                <Button onClick={successToast}>成功 toast</Button>
                <WhiteSpace />
                <Button onClick={failToast}>失败 toast</Button>
                <WhiteSpace />
                <Button onClick={offline}>网络 toast</Button>
                <WhiteSpace />
                <Button onClick={loadingToast}>加载中 toast</Button>
                <WhiteSpace />
                <Button onClick={outClose}>外部隐藏 toast</Button>
                <WhiteSpace />
            </WingBlank>
        );
    }
}


export default AntToast;
