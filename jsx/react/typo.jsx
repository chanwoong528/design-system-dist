
        import React from "react";

        const typo = ({children, tag, ...restProps}) => {

        const cssList = ["d1","d3","d2","b5","b4","b3","b2","b1"];
        const css = restProps.className ? restProps.className : cssList[0];
     
        if (!!tag) {
          return React.createElement(tag, {...restProps,className: css }, children);
        }

        return <p {...restProps,className: css }>{children}</p>;
        };
        export default typo;
      