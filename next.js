npm i list 
next, prop-types react react-dom, 
for dev "-D"
eslint eslint-plugin-import

components:

  #way to link
  1. import Link from'next/link'
  
  #way to make applayout
  const AppLayout =({children})=>{
    return(
        <div>
            <div>
                <Link href='/'><a>메인</a></Link>
                <Link href='profile'><a>프로필</a></Link>
            </div>
            {children}
        </div>
    );
};

#using layout

import layout from '../components/...

const 'pages' = () {
return (
<layout>
~~~
</layout>
);
};


components site:
styled,emotion

_app.js 공통된 적용사항을 만들어낼수있음

