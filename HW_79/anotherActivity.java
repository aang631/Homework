package com.example.azi.multipleactivities;

import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.widget.EditText;
import android.widget.TextView;

public class anotherActivity extends AppCompatActivity {
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_another);

        Bundle bundle = getIntent().getExtras();
        if (bundle == null) {
            return;
        }
        String userInput = bundle.getString("userInput");
        TextView userTextDisplayed = (TextView)findViewById(R.id.usersText);
        userTextDisplayed.setText(userInput);


    }
}
