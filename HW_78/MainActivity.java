package com.example.azi.contactlist;

import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.ArrayAdapter;
import android.widget.Button;
import android.widget.EditText;
import android.widget.ListView;

import java.util.ArrayList;

public class MainActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        Button addButton = (Button)findViewById(R.id.addButton);
        final EditText newContactText = (EditText)findViewById(R.id.newContactText);
        String [] contacts = new String[] {
            "Donald Trump",
            "Mike Pence",
            "Warren Buffet",
            "Jared Kushner",
            "Ivanka Kushner",
            "Hillary Clinton",
            "Donald Trump",
            "Mike Pence",
            "Warren Buffet",
            "Jared Kushner",
            "Ivanka Kushner",
            "Hillary Clinton",
            "Donald Trump",
            "Mike Pence",
            "Warren Buffet",
            "Jared Kushner",
            "Ivanka Kushner",
            "Hillary Clinton"
        };

        ArrayList<String> allContacts = new ArrayList<String>();
        for (int i = 0; i < contacts.length; i++) {
            allContacts.add(contacts[i]);
        }

        final ListView contactsListView = (ListView)findViewById(R.id.contactsListView);
        final ArrayAdapter<String> adapter = new ArrayAdapter<String>(this, R.layout.contact_list_item, R.id.contactNameTextView, allContacts);
        contactsListView.setAdapter(adapter);

        addButton.setOnClickListener(new View.OnClickListener() {
             @Override
             public void onClick(View v) {
                 String newContact = newContactText.getText().toString();
                 adapter.add(newContact);
                 contactsListView.setAdapter(adapter);
                 newContactText.setText("");
             }
         });
    }
}
