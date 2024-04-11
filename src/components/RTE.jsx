import { Editor } from "@tinymce/tinymce-react";
import React from 'react';
import { Controller, useForm } from "react-hook-form";
//how to use editor is on site of tiny mce 
function RTE({name,label,control,defaultValue='ting mce editor'}) {


    return (

    
        
             <Controller

            name={name}
            label={label}
            defaultValue={defaultValue}
            control={control}

             render={({field: {onChange}}) => (
            
             <Editor
             apiKey='1ah9tei3w39hbhuzwrj7zec5bxwjsj52pqtifhx1feolh5rb'


            init={{
            initialValue: {defaultValue},
            height: 500,
            menubar: true,
            plugins: [
                "image",
                "advlist",
                "autolink",
                "lists",
                "link",
                "image",
                "charmap",
                "preview",
                "anchor",
                "searchreplace",
                "visualblocks",
                "code",
                "fullscreen",
                "insertdatetime",
                "media",
                "table",
                "code",
                "help",
                "wordcount",
                "anchor",
            ],
            toolbar:
            "undo redo | blocks | image | bold italic forecolor | alignleft aligncenter bold italic forecolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent |removeformat | help",
            content_style: "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }"
        }}
        onEditorChange={onChange}

        />
        )}
        />
            
    )
}

export default RTE;