//author: SmileNet
package com.smilenet.igor;

import android.os.Bundle;
import org.apache.cordova.*;

public class IgorActivity extends DroidGap {

    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        super.loadUrl("file:///android_asset/www/index.html");
    }   
}
