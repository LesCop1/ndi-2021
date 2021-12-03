import { Typography } from "@mui/material";
import MainLayout from "layouts/MainLayout";
import React from "react";

const LoremIpsum: React.FC<{ title: string }> = ({ title }) => (
  <MainLayout>
    <Typography variant="h3">{title}</Typography>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent pretium augue id tristique rutrum. Quisque orci
      justo, ullamcorper ut ante a, sollicitudin fringilla elit. Cras volutpat nec erat eget eleifend. Aliquam molestie
      quam non ultricies auctor. Curabitur ac erat vitae odio dignissim vulputate eu vitae justo. Ut justo felis,
      consectetur nec risus vel, sodales mattis leo. Cras tincidunt tempus nibh. Donec quis pharetra ex, id vehicula ex.
      Sed libero ante, lobortis sit amet facilisis in, auctor mollis lorem. Integer euismod nunc nisl, pulvinar
      sollicitudin augue posuere nec. Nunc laoreet, elit at ullamcorper ullamcorper, enim est sollicitudin mi, et
      laoreet sapien nunc eu ante. Curabitur accumsan, neque varius aliquet sollicitudin, odio neque rhoncus eros,
      suscipit rutrum leo libero id nulla. Morbi in mi ante. Proin porta scelerisque elit, ut convallis enim blandit sit
      amet. Integer dignissim nibh sit amet nulla efficitur, eget sodales quam tristique. Nullam nisi metus, lobortis at
      semper sit amet, volutpat a sapien. Aliquam ac eleifend mauris. Quisque ut ex enim. Phasellus eleifend auctor
      nisl, mollis malesuada magna accumsan eu. Nulla cursus accumsan tellus, eu convallis nisi scelerisque eget.
      Phasellus aliquam, risus vitae viverra ullamcorper, dui erat sagittis diam, quis lacinia est odio vel lacus. Duis
      feugiat tincidunt viverra. Quisque id dictum odio. Sed at semper eros. Sed a dui tortor. Nullam id lacinia eros.
      Vestibulum hendrerit, sem sed aliquam aliquam, odio nisl volutpat mi, a fringilla lorem ante et est. Mauris eu
      justo non urna molestie volutpat. Vestibulum porttitor ligula vestibulum condimentum fermentum. Vestibulum
      sollicitudin luctus lorem, nec convallis turpis. Nam in nunc ac nunc fermentum rhoncus vel imperdiet quam. Duis ex
      est, malesuada nec imperdiet ac, lobortis sit amet lacus. Integer laoreet, nisi non ultrices sodales, metus dolor
      iaculis augue, ac gravida ante lacus nec odio. Praesent facilisis nunc id bibendum molestie. In hac habitasse
      platea dictumst. Donec nisl mi, malesuada feugiat suscipit vel, semper quis massa. Nullam non sollicitudin velit.
      Suspendisse ultricies tristique efficitur. Morbi luctus mi non ex rhoncus hendrerit sit amet pulvinar lectus.
      Integer congue ligula nec magna pulvinar, at rutrum leo eleifend. Nulla elementum diam metus, quis venenatis arcu
      auctor eget. Mauris gravida leo eget congue pharetra. Quisque porta massa non ornare egestas. Phasellus eget quam
      dolor. Morbi arcu purus, porttitor ac aliquet in, blandit eget diam. Etiam malesuada posuere nibh, placerat
      pellentesque nisl molestie vitae. Sed volutpat at tortor vitae interdum. Praesent sit amet dolor justo. Duis
      sollicitudin commodo est vitae cursus. Nulla tincidunt massa sed aliquet tincidunt. Sed vulputate tempus ligula,
      nec vulputate tortor. Phasellus id condimentum sem, at pulvinar tellus. Suspendisse quam lorem, lobortis et semper
      in, fermentum sed nibh. Curabitur sem leo, varius non magna eget, accumsan tempus justo. Cras ultrices, mauris ut
      dapibus aliquet, quam est convallis dolor, vel pellentesque nisl est in nisl. Vestibulum efficitur, massa id
      tempus ultrices, nisl mi dignissim lacus, id tincidunt arcu massa ut massa. Ut ultricies pharetra finibus.
      Interdum et malesuada fames ac ante ipsum primis in faucibus.
    </p>
  </MainLayout>
);

export default LoremIpsum;
