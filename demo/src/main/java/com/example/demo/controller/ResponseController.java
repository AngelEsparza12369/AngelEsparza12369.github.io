package com.example.demo.controller;

import com.example.demo.model.ResponseData;
import org.springframework.web.bind.annotation.*;

import java.io.FileWriter;
import java.io.IOException;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "*")
public class ResponseController {

    @PostMapping("/respuesta")
    public String guardarRespuesta(@RequestBody ResponseData data) {

        try {

            FileWriter file = new FileWriter("respuesta.json");

            String json = """
                    {
                        "respuesta": "%s"
                    }
                    """.formatted(data.getRespuesta());

            file.write(json);
            file.close();

            return "Respuesta guardada";

        } catch (IOException e) {
            return "Error al guardar";
        }
    }
}