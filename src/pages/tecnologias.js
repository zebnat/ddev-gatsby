import React from 'react'

import Layout from '../components/layout'
import Header from '../components/Header'
import { graphql } from 'gatsby'

const Skills = ({ data }) => (
  <Layout data={data} pageUniqueId="tech">
    <Header
      h1={'Skills o Tecnologías IT'}
      h2={'Comprueba que tecnologías he utilizado y el nivel de manejo'}
      quote={
        'El mundo de la programación y sobretodo en entornos Web no deja de cambiar. Mi curiosidad y dedicación por la productividad hace que siempre que tenga tiempo me ponga a aprender nuevas tendencias tecnológicas.'
      }
    />

    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec bibendum
      nunc diam. Pellentesque malesuada velit in nisl venenatis consequat.
      Aliquam pharetra massa nisl, eget dignissim turpis lacinia nec. Morbi quis
      rhoncus arcu. Pellentesque eleifend, urna nec hendrerit lobortis, sem
      ipsum imperdiet purus, dapibus molestie sem ipsum vel leo. Vestibulum
      hendrerit fringilla ipsum id dictum. Mauris vel erat accumsan, mattis erat
      at, lobortis odio. Phasellus in dolor bibendum, placerat velit vel,
      feugiat justo. Morbi hendrerit a purus sit amet congue. Nulla gravida
      dignissim velit vitae ultrices. Integer euismod dignissim lectus nec
      posuere. Suspendisse potenti. Nam a aliquam magna.
    </p>
    <p>
      Proin tempus, ex quis dignissim tincidunt, lectus lectus semper lacus, in
      sagittis purus purus sed nibh. In hac habitasse platea dictumst. Orci
      varius natoque penatibus et magnis dis parturient montes, nascetur
      ridiculus mus. Donec convallis placerat turpis, vel blandit dui. Curabitur
      eu dapibus lectus. In quis tempus dolor. Donec efficitur, tortor a
      facilisis egestas, neque erat tincidunt nisi, id dapibus massa elit et
      ante. Cras rutrum leo sed mattis accumsan. Sed ac venenatis augue.
      Maecenas mollis velit vitae mi pulvinar elementum.
    </p>
    <p>
      Sed dignissim dolor nec convallis malesuada. Quisque tincidunt elit quis
      vehicula laoreet. Nunc ut convallis urna. Suspendisse congue consectetur
      risus, quis lacinia tellus tincidunt ac. Donec bibendum ligula massa.
      Praesent nec vestibulum augue. Morbi id pharetra turpis. Mauris cursus
      convallis dolor, sed blandit tortor bibendum a. In hac habitasse platea
      dictumst. Pellentesque dignissim rutrum pellentesque. Vestibulum enim sem,
      dignissim et ipsum sed, maximus blandit dolor. Donec porta, purus sit amet
      ullamcorper rhoncus, metus massa maximus ante, a tincidunt dolor nulla non
      ante. Suspendisse at justo facilisis, sagittis justo vitae, interdum est.
      Aliquam eu facilisis lacus. Mauris iaculis enim ac eleifend dapibus.
    </p>
    <p>
      Nullam at lacinia urna. Duis fermentum, nunc sit amet ultricies convallis,
      mi metus pellentesque lectus, at consectetur libero lectus non massa.
      Praesent ac dui et leo egestas varius eget ac neque. Maecenas eget lacinia
      arcu. Cras consectetur imperdiet arcu, id interdum nunc tristique eu.
      Etiam hendrerit, orci ut varius euismod, enim ipsum auctor est, eget
      gravida mauris mi a tortor. Aenean mauris augue, maximus vel rhoncus eget,
      egestas id nunc.
    </p>
    <p>
      Donec iaculis eu nisi non aliquet. Mauris bibendum vitae augue at
      molestie. Nullam arcu libero, tincidunt et sapien et, fermentum rhoncus
      ipsum. Morbi eu lacus sed felis suscipit mollis. Pellentesque nec vehicula
      leo, ornare accumsan massa. Curabitur tempus, nibh id ornare porttitor,
      tortor sapien dictum enim, nec volutpat augue odio a nunc. In dui sem,
      tristique molestie congue vel, lobortis non nisl. Sed eu odio vitae ipsum
      egestas finibus quis eu neque. Proin rhoncus facilisis nunc vel varius.
      Nam ac aliquet massa, tincidunt convallis nulla. Duis dapibus metus sit
      amet tempus faucibus. In faucibus erat nibh, vel tristique neque pulvinar
      nec. Quisque sit amet nunc risus.
    </p>
    <p>
      Donec sed volutpat ligula, vel iaculis nibh. Aenean leo ligula, maximus ut
      mattis in, rutrum ac mauris. Nam facilisis, dui et posuere laoreet, risus
      felis pharetra lectus, vitae imperdiet lorem tellus ut nulla. Praesent
      sapien massa, lacinia ut odio nec, hendrerit ultrices magna. In
      pellentesque, ex non accumsan fringilla, ex neque congue velit, vel luctus
      lectus lectus eget nulla. Nulla eleifend magna quis lorem pulvinar cursus.
      Fusce euismod mi et volutpat auctor. Suspendisse potenti. Curabitur neque
      leo, gravida sed faucibus vitae, sagittis ac nulla.
    </p>
    <p>
      Praesent gravida eget nisl quis dictum. Curabitur leo arcu, congue nec sem
      et, pulvinar finibus lacus. Integer at luctus purus. Aliquam ac ante
      turpis. Vivamus et iaculis enim. Fusce dictum, lectus et blandit
      scelerisque, libero ipsum rhoncus orci, vel semper justo velit vel mauris.
      Aenean quis tortor ipsum. Vivamus non nisi nec tortor imperdiet aliquam.
      Sed id augue eros. Nunc eget placerat nisl, sit amet lobortis lorem.
    </p>
    <p>
      Etiam feugiat arcu quis orci venenatis elementum. Vivamus malesuada odio
      id massa facilisis, ut venenatis mi elementum. Curabitur id dictum ligula.
      Aliquam erat volutpat. Vivamus quis velit risus. Sed sit amet blandit
      ipsum, id iaculis ex. Donec suscipit risus a dolor lacinia, non dapibus ex
      pulvinar. Nam nec tristique eros, eu facilisis ligula. Nullam eu risus
      eget massa porttitor efficitur. Vivamus viverra lectus id tellus efficitur
      sodales at ac lectus. Sed semper luctus purus, in placerat felis malesuada
      eget. Nam venenatis dictum libero, vel viverra sapien euismod id. Sed
      tempor urna sed augue viverra faucibus. Cras nibh risus, maximus elementum
      porta vel, dictum sed est.
    </p>
    <p>
      Donec fermentum dictum lacus sed facilisis. Etiam semper iaculis orci, non
      viverra ante varius id. Suspendisse viverra tellus diam, ut aliquet libero
      maximus vitae. Etiam gravida est ipsum, id rutrum velit sollicitudin a.
      Vivamus lectus magna, vestibulum sollicitudin ligula ut, dapibus
      consectetur leo. Fusce dapibus turpis orci, ac rutrum metus rhoncus eu.
      Fusce vestibulum nisl sed mattis rhoncus. Praesent sagittis mauris in ante
      dapibus maximus. Phasellus auctor nisi vitae neque pellentesque luctus.
      Donec laoreet, eros non ultrices egestas, ipsum metus molestie eros, in
      accumsan lacus sem et nisl. Pellentesque habitant morbi tristique senectus
      et netus et malesuada fames ac turpis egestas. Curabitur bibendum vel arcu
      ac luctus. Aenean bibendum ante vel arcu faucibus ornare.
    </p>
    <p>
      Phasellus vitae lobortis nisi. In velit ipsum, luctus non aliquet iaculis,
      pulvinar nec nisi. Ut porta sodales erat ac varius. Nam lacinia efficitur
      lacus at gravida. Duis porta ornare purus, varius malesuada ipsum interdum
      semper. Phasellus pharetra egestas lorem, ut tempus mi ultrices ut. Duis
      vitae iaculis metus, eu vulputate orci. Duis facilisis nibh ut odio
      laoreet laoreet. Nulla justo leo, fermentum at justo sit amet, accumsan
      ullamcorper dolor. Nullam consectetur eu dolor sed aliquam. Integer elit
      tortor, mattis et diam eu, auctor consectetur lorem. Donec id odio ac elit
      mattis scelerisque quis quis leo. Vestibulum placerat nisi a dignissim
      tempor.
    </p>
    <p>
      Proin eros est, ullamcorper et finibus vel, cursus eget elit. Praesent
      turpis ligula, commodo non scelerisque vitae, faucibus eget massa. Nullam
      eu risus imperdiet dolor luctus lacinia molestie id lacus. Fusce felis
      nisl, bibendum in nulla eu, sagittis mattis mauris. Phasellus dolor urna,
      fringilla ac sapien nec, pharetra luctus libero. Suspendisse non turpis
      turpis. Vestibulum mattis mi et libero porttitor, ac eleifend ante
      vulputate. Aliquam mattis rutrum ex vitae tincidunt. Nullam sit amet
      eleifend augue. Nunc suscipit vestibulum congue.
    </p>
    <p>
      Aenean efficitur nec mi a venenatis. Integer augue diam, feugiat at turpis
      vitae, pulvinar porta metus. Nam maximus venenatis ante, et dignissim
      lectus accumsan vulputate. Integer vitae ex eu felis imperdiet vehicula.
      Quisque gravida at nulla id vestibulum. Lorem ipsum dolor sit amet,
      consectetur adipiscing elit. Aliquam at sagittis lectus. Fusce pretium
      sapien lobortis rhoncus elementum. Pellentesque congue erat risus, nec
      porttitor eros consectetur ut. Mauris ac lorem fermentum, vestibulum massa
      sit amet, congue nisi. Nunc tincidunt elementum orci, nec malesuada est
      suscipit laoreet. Ut elementum, ex in euismod dignissim, arcu neque
      sodales neque, eget bibendum ipsum ante luctus dolor.
    </p>
    <p>
      Praesent scelerisque metus a enim volutpat pretium. Aliquam erat volutpat.
      Curabitur mollis maximus purus pellentesque vulputate. Lorem ipsum dolor
      sit amet, consectetur adipiscing elit. Maecenas non suscipit ex, at
      condimentum purus. Quisque ac neque molestie, commodo eros vitae,
      venenatis tellus. Donec urna est, aliquet sit amet tortor venenatis,
      molestie aliquet erat. Nulla euismod tellus eget ornare semper. Vestibulum
      vel elit lacinia, accumsan elit vitae, accumsan purus. Morbi sit amet
      luctus sem. Nulla facilisi.
    </p>
    <p>
      Etiam fringilla justo suscipit, molestie purus sed, pellentesque purus.
      Donec sed bibendum nulla, ut gravida purus. Vestibulum laoreet fermentum
      vehicula. Sed tincidunt eros vel nibh condimentum, sit amet luctus leo
      pretium. Vivamus id imperdiet dolor. Morbi consequat mattis sem, id tempus
      nulla dapibus vel. Quisque vestibulum pharetra nisl, faucibus maximus quam
      semper id. Nulla facilisi. Fusce eget tortor blandit, semper justo sed,
      fermentum ex. Sed rhoncus tempus viverra.
    </p>
    <p>
      Nam sed velit vel ante imperdiet aliquam eleifend sit amet eros. Integer
      non tellus fermentum augue interdum porta sit amet sit amet elit. In diam
      felis, posuere at commodo vitae, scelerisque nec ligula. Class aptent
      taciti sociosqu ad litora torquent per conubia nostra, per inceptos
      himenaeos. Aenean pretium, metus eget sollicitudin auctor, purus mi
      pharetra augue, vitae dignissim dui ligula id metus. In commodo, quam
      vitae facilisis ullamcorper, ante sapien fringilla nisi, sed maximus nisl
      lectus non massa. In varius erat vel odio vestibulum sagittis. Duis
      vehicula non sapien lacinia facilisis. Duis egestas cursus purus. Cras
      facilisis sapien vel viverra sagittis.
    </p>
  </Layout>
)

export default Skills
export const query = graphql`
  query {
    site {
      ...SiteMetadata
    }
    allMetaData(filter: { currentLang: { eq: "es" } }) {
      ...MetaData
    }
    allMenu(filter: { lang: { eq: "es" } }) {
      ...Menu
    }
  }
`
