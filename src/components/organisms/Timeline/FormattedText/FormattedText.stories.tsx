import React from 'react'
import { FormattedText } from './Component'
import FormattedTextParagraph from './Paragraph'

export default {
    title: 'Molecules/FormattedText',
}

const template = `
<h1>First heading</h1>
<h2>Second heading</h2>
<h3>Third heading</h3>
<h4>Fourth heading</h4>
<h5>Fifth heading</h5>
<p>This is some basic, sample markdown.</p>

<ul>
<li>Unordered lists,</li>
<li>More</li>
</ul>

<ol>
<li>Ordered list</li>
<li>More</li>
<li>More</li>
</ol>


<blockquote>
Tristique sed varius tempus aliquet lacus metus, quam enim. Lorem facilisi euismod aliquam nibh id in faucibus. Ultrices facilisis a elementum, blandit amet, mi elit platea augue.
</blockquote>
<figcaption>Niek Jansen, Mailroom TenneT</figcaption>

<p>And <strong>bold</strong>, <em>italics</em>, and even <em>italics and later <strong>bold</strong></em>. <a href="https://google.com">A link</a> to somewhere.</p>
<p>Also look at this crazy table from W3</p>

<p>Nunc dictumst amet diam, massa erat ac. Non vel <a href='#'>turpis accumsan</a> magnis sed. Vulputate eu, hendrerit fringilla rutrum non eget purus convallis. Lobortis venenatis, ornare non elit. Posuere porta sapien, <a href='#crosslinks' data-reference='on'>ut pulvinar purus.</a> Consequat vitae felis elementum, magna vitae eros amet. Erat non ac odio quis <a href='#' data-reference='on'>erat interdum</a> varius morbi elementum. Mattis convallis odio mattis in morbi purus eu. In pharetra quam non ridiculus. Orci dui egestas consectetur conv allis congue commodo. Suspendisse pretium molestie scelerisque at in.</p>
<table>
<tr>
<th></th>
<th>Column title</th>
<th>Column title</th>
<th>Column title</th>
</tr>
<tr>
<th>Row title</th>
<td>Table contents</td>
<td>Table contents</td>
<td>Table contents</td>
</tr>
<tr>
<th>Row title</th>
<td>Table contents</td>
<td>Table contents</td>
<td>Table contents</td>
</tr>
<tr>
<th>Row title</th>
<td>Table contents</td>
<td>Table contents</td>
<td>Table contents</td>
</tr>
</table>
`

const Template = () => (
    <div className='main-grid'>
        <div className='col-span-full md:col-start-2'>
            <FormattedText html={template}/>
        </div>
    </div>
)

export const Default = Template.bind({})

const ParagraphTemplate = () => (
    <div className='main-grid'>
        <div className='col-span-full md:col-start-2'>
            <FormattedTextParagraph html={template} />
        </div>
    </div>
)

export const Paragraph = ParagraphTemplate.bind({})