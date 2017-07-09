package com.antdemo;

import android.os.Bundle;

import com.facebook.react.ReactActivity;

import cn.jpush.android.api.JPushInterface;
import cn.jpush.reactnativejpush.Logger;

public class MainActivity extends ReactActivity {

    /**
     * Returns the name of the main component registered from JavaScript.
     * This is used to schedule rendering of the component.
     */
    @Override
    protected String getMainComponentName() {
        return "AntDemo";
    }

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        JPushInterface.init(this);
        Logger.d("MainActivityon","MainActivity-->onCreate");
    }
    @Override
    protected void onPause() {
        super.onPause();
        JPushInterface.onPause(this);
        Logger.d("MainActivityon","MainActivity-->onPause");
    }
    @Override
    protected void onResume() {
        super.onResume();
        JPushInterface.onResume(this);
        Logger.d("MainActivityon","MainActivity-->onResume");
    }
    @Override
    protected void onDestroy() {
        super.onDestroy();
        Logger.d("MainActivityon","MainActivity-->onDestroy");
    }
}
