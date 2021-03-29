## how to pass ref from virtual parent to children 

# React.

```javascript

    let InputField = React.forwardRef((props,ref)=>{
        return (
            <input ref={ref} style={{padding:"10px 20px"}}></input>
        )
    })
```

###### React.forwardRef() takes component as input and return component (HOC) 
###### component second parameter should be ref which will be passed by parent 