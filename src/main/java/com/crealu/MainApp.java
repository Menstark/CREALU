package com.crealu;

import javafx.application.Application;
import javafx.scene.Scene;
import javafx.scene.control.Label;
import javafx.stage.Stage;

public class MainApp extends Application {
    @Override
    public void start(Stage primaryStage) {
        primaryStage.setTitle("Fiche de prise de mesure CREALU");
        Label label = new Label("Bienvenue sur la fiche de mesure CREALU !");
        primaryStage.setScene(new Scene(label, 600, 400));
        primaryStage.show();
    }

    public static void main(String[] args) {
        launch(args);
    }
}
