package com.example.loginapp;

import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;
import android.speech.tts.TextToSpeech;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.Toast;

import java.util.Locale;

public class MainActivity extends AppCompatActivity {

    EditText e1, e2;
    Button b1;
    String s1, s2;
    TextToSpeech textToSpeech;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        e1 = findViewById(R.id.editText);
        e2 = findViewById(R.id.editText2);
        b1 = findViewById(R.id.button);

        textToSpeech = new TextToSpeech(getApplicationContext(), new TextToSpeech.OnInitListener() {
            @Override
            public void onInit(int i) {

                // if No error is found then only it will run
                if (i != TextToSpeech.ERROR) {
                    // To Choose language of speech
                    textToSpeech.setLanguage(Locale.UK);
                }
            }
        });
        b1.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {

                s1 = e1.getText().toString();
                s2 = e2.getText().toString();

                if(s1.contentEquals("Subham")&&s2.contentEquals("subham7")){
                    textToSpeech.speak("Login Successful", TextToSpeech.QUEUE_FLUSH, null);
                }
                else
                {
                    textToSpeech.speak("Login Not Successful", TextToSpeech.QUEUE_FLUSH, null);
                }
            }
        });
    }
}