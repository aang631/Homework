package com.example.azi.tipcalculatingapp;

import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.TextView;

public class calculator extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_calculator);

        Button calculateButton = (Button)findViewById(R.id.calculate);
        final EditText theBillAmount = (EditText)findViewById(R.id.billAmount);
        final EditText thePercentage = (EditText)findViewById(R.id.percentage);
        final TextView theResult = (TextView)findViewById(R.id.result);

        calculateButton.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
               // theResult.setText(theEditText.getText());
                float bill= Float.parseFloat(theBillAmount.getText().toString());
                float percentage= Float.parseFloat(thePercentage.getText().toString());
                float answer= bill*(percentage/100+1);
                theResult.setText(Float.toString(answer));
            }
        });
    }
}
