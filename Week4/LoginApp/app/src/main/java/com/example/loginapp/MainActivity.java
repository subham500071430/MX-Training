package com.example.loginapp;

import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.Toast;

public class MainActivity extends AppCompatActivity {

    EditText e1,e2;
    Button b1;
    String s1,s2;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        e1 = findViewById(R.id.editText);
        e2 = findViewById(R.id.editText2);
        b1 = findViewById(R.id.button);

        b1.setOnClickListener(new View.OnClickListener(){

            @Override
            public void onClick(View view) {
                s1 = e1.getText().toString();
                s2 = e2.getText().toString();

                if(s1.contentEquals("Subham")&&s2.contentEquals("subham7")){
                    Toast.makeText(MainActivity.this,"Login Succesful",Toast.LENGTH_SHORT).show();
                }
                else
                {
                    Toast.makeText(MainActivity.this,"Login Unsuccesful",Toast.LENGTH_SHORT).show();
                }
            }
        });
    }
}