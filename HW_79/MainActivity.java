package com.example.azi.multipleactivities;

import android.content.Intent;
import android.net.Uri;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;

public class MainActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        final EditText yourInput = (EditText)findViewById(R.id.userInput);
        Button  newActivity = (Button)findViewById(R.id.newActivity);

        newActivity.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                String userInput= yourInput.getText().toString();
                Intent intent = new Intent(MainActivity.this, anotherActivity.class);
                intent.putExtra("userInput", userInput);
                startActivity(intent);
            }
        });
    }
}
