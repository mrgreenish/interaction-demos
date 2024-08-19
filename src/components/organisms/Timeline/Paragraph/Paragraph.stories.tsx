import React from 'react'
import Paragraph from "@components/molecules/Paragraph/Component";
import ContentFrame from "@components/organisms/ContentFrame/Component";

export default {
    title: 'Molecules/Paragraph'
}

const Template = (): JSX.Element => (
    <div className='main-grid'>
        <div className='col-span-10 col-start-2'>
            <ContentFrame title="Title" subtitle='subtitle' attachments={[]}>
            <Paragraph
                html={'<p><b>Demontage der Oberleitung</b><br /><br />Nunc dictumst amet diam, massa erat ac. Non vel <a href=\'#\'>turpis accumsan</a> magnis sed. Vulputate eu, hendrerit fringilla rutrum non eget purus convallis. Lobortis venenatis, ornare non elit. Posuere porta sapien, <a data-reference="on" title="Erfahren Sie alles über" data-href="http://www.tesla.com" data-description="Stickstoff mit (importiertem) hochkalorischem Gas" href="#crosslink-other">cross referance item</a> Consequat vitae felis elementum, magna vitae eros amet. Erat non ac odio quis <a data-reference="on" title="Lesen Sie auch" data-href="http://www.google.com" data-description="Verbrauchs an niederkalorischem Gas im Jahr 2017" href="#crosslink-operations">operations</a> varius morbi elementum. Mattis convallis odio mattis in morbi purus eu. In pharetra quam non ridiculus. <blockquote>Tristique sed varius tempus aliquet lacus metus, quam enim. Lorem facilisi euismod aliquam nibh id in faucibus. Ultrices facilisis a elementum, blandit amet, mi elit platea augue.</blockquote><figcaption>Niek Jansen, Mailroom TenneT</figcaption> <a data-reference="on" title="Lesen Sie auch" data-href="/raport" data-description="Verbrauchs raport" href="#crosslink-raport">Raport</a>. Mattis convallis odio mattis in morbi purus eu. In pharetra quam non ridiculus.</p>'}
            />
            </ContentFrame>
        </div>
    </div>
)

const TemplateWithImage = (): JSX.Element => (
    <div className='main-grid'>
        <div className='col-span-10 col-start-2'>
            <ContentFrame title="Title" subtitle='subtitle' attachments={[]}>
            <Paragraph
                html={'<p><b>Demontage der Oberleitung</b><br /><br />Nunc dictumst amet diam, massa erat ac. Non vel <a href=\'#\'>turpis accumsan</a> magnis sed. Vulputate eu, hendrerit fringilla rutrum non eget purus convallis. Lobortis venenatis, ornare non elit. Posuere porta sapien, <a data-reference="on" title="Erfahren Sie alles über" data-href="http://www.tesla.com" data-description="Stickstoff mit (importiertem) hochkalorischem Gas" href="#crosslink-other">cross referance item</a> Consequat vitae felis elementum, magna vitae eros amet. Erat non ac odio quis <a data-reference="on" title="Lesen Sie auch" data-href="http://www.google.com" data-description="Verbrauchs an niederkalorischem Gas im Jahr 2017" href="#crosslink-operations">operations</a> varius morbi elementum. Mattis convallis odio mattis in morbi purus eu. In pharetra quam non ridiculus. <blockquote>Tristique sed varius tempus aliquet lacus metus, quam enim. Lorem facilisi euismod aliquam nibh id in faucibus. Ultrices facilisis a elementum, blandit amet, mi elit platea augue.</blockquote><figcaption>Niek Jansen, Mailroom TenneT</figcaption> <a data-reference="on" title="Lesen Sie auch" data-href="/raport" data-description="Verbrauchs raport" href="#crosslink-raport">Raport</a>. Mattis convallis odio mattis in morbi purus eu. In pharetra quam non ridiculus.</p>'}
                topImage={
                    {src: 'https://via.placeholder.com/300x200', 
                    alt: 'Placeholder',
                    width: 300,
                    height: 200
                }}
            />
            </ContentFrame>
        </div>
        <div className='col-span-10 col-start-2'>
            <ContentFrame title="Title" subtitle='subtitle' attachments={[]}>
            <Paragraph
                html={'<p><b>Demontage der Oberleitung</b><br /><br />Nunc dictumst amet diam, massa erat ac. Non vel <a href=\'#\'>turpis accumsan</a> magnis sed. Vulputate eu, hendrerit fringilla rutrum non eget purus convallis. Lobortis venenatis, ornare non elit. Posuere porta sapien, <a data-reference="on" title="Erfahren Sie alles über" data-href="http://www.tesla.com" data-description="Stickstoff mit (importiertem) hochkalorischem Gas" href="#crosslink-other">cross referance item</a> Consequat vitae felis elementum, magna vitae eros amet. Erat non ac odio quis <a data-reference="on" title="Lesen Sie auch" data-href="http://www.google.com" data-description="Verbrauchs an niederkalorischem Gas im Jahr 2017" href="#crosslink-operations">operations</a> varius morbi elementum. Mattis convallis odio mattis in morbi purus eu. In pharetra quam non ridiculus. <blockquote>Tristique sed varius tempus aliquet lacus metus, quam enim. Lorem facilisi euismod aliquam nibh id in faucibus. Ultrices facilisis a elementum, blandit amet, mi elit platea augue.</blockquote><figcaption>Niek Jansen, Mailroom TenneT</figcaption> <a data-reference="on" title="Lesen Sie auch" data-href="/raport" data-description="Verbrauchs raport" href="#crosslink-raport">Raport</a>. Mattis convallis odio mattis in morbi purus eu. In pharetra quam non ridiculus.</p>'}
                bottomImage={
                    {src: 'https://via.placeholder.com/300x200', 
                    alt: 'Placeholder',
                    width: 300,
                    height: 200
                }}
            />
            </ContentFrame>
        </div>
        <div className='col-span-10 col-start-2'>
            <ContentFrame title="Title" subtitle='subtitle' attachments={[]}>
            <Paragraph
                html={'<p><b>Demontage der Oberleitung</b><br /><br />Nunc dictumst amet diam, massa erat ac. Non vel <a href=\'#\'>turpis accumsan</a> magnis sed. Vulputate eu, hendrerit fringilla rutrum non eget purus convallis. Lobortis venenatis, ornare non elit. Posuere porta sapien, <a data-reference="on" title="Erfahren Sie alles über" data-href="http://www.tesla.com" data-description="Stickstoff mit (importiertem) hochkalorischem Gas" href="#crosslink-other">cross referance item</a> Consequat vitae felis elementum, magna vitae eros amet. Erat non ac odio quis <a data-reference="on" title="Lesen Sie auch" data-href="http://www.google.com" data-description="Verbrauchs an niederkalorischem Gas im Jahr 2017" href="#crosslink-operations">operations</a> varius morbi elementum. Mattis convallis odio mattis in morbi purus eu. In pharetra quam non ridiculus. <blockquote>Tristique sed varius tempus aliquet lacus metus, quam enim. Lorem facilisi euismod aliquam nibh id in faucibus. Ultrices facilisis a elementum, blandit amet, mi elit platea augue.</blockquote><figcaption>Niek Jansen, Mailroom TenneT</figcaption> <a data-reference="on" title="Lesen Sie auch" data-href="/raport" data-description="Verbrauchs raport" href="#crosslink-raport">Raport</a>. Mattis convallis odio mattis in morbi purus eu. In pharetra quam non ridiculus.</p>'}
                sideImage={
                    {src: 'https://via.placeholder.com/300x200', 
                    alt: 'Placeholder',
                    width: 300,
                    height: 200
                }}
            />
            </ContentFrame>
        </div>
    </div>
)

export const Default = Template.bind({})
export const WidthImage = TemplateWithImage.bind({})