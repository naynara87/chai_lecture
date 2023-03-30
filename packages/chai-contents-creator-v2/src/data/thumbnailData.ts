import { ContentType } from "chai-ui-v2";

import ThumbActivityGuide from "../assets/images/icon/thumbnail/comp_activity_guide.png";
import ThumbAudioAndWordsCarousel from "../assets/images/icon/thumbnail/comp_audio_and_words_carousel.png";
import ThumbAudio from "../assets/images/icon/thumbnail/comp_audio.png";
import ThumbBorderTextBox from "../assets/images/icon/thumbnail/comp_border_text_box.png";
import ThumbCharacterCardList from "../assets/images/icon/thumbnail/comp_character_card_list.png";
import ThumbContentsCardList from "../assets/images/icon/thumbnail/comp_contents_card_list.png";
import ThumbConversationWordList from "../assets/images/icon/thumbnail/comp_conversation_word_list.png";
import ThumbConversation from "../assets/images/icon/thumbnail/comp_conversation.png";
import ThumbCornerGuideCharacter from "../assets/images/icon/thumbnail/comp_corner_guide.png";
import ThumbExplainingCharacter from "../assets/images/icon/thumbnail/comp_explaining.png";
import ThumbIconText from "../assets/images/icon/thumbnail/comp_icon_text.png";
import ThumbImageWithDescriptionList from "../assets/images/icon/thumbnail/comp_image_with_description.png";
import ThumbMultiLevelActionCard from "../assets/images/icon/thumbnail/comp_multi_level_action_card_list.png";
import ThumbMultiLevelActionSentenceCard from "../assets/images/icon/thumbnail/comp_multi_level_sentence_card_list.png";
import ThumbNotiCharacterList from "../assets/images/icon/thumbnail/comp_noti_character_list.png";
import ThumbNumberingTextList from "../assets/images/icon/thumbnail/comp_numbering_text_list.png";
import ThumbSpeaking from "../assets/images/icon/thumbnail/comp_speaking.png";
import ThumbCardTab from "../assets/images/icon/thumbnail/comp_tabtab.png";
import ThumbText from "../assets/images/icon/thumbnail/comp_text.png";
import ThumbToggleSentenceList from "../assets/images/icon/thumbnail/comp_toggle_sentence.png";
import ThumbVideo from "../assets/images/icon/thumbnail/comp_video.png";
import ThumbWordsCarousel from "../assets/images/icon/thumbnail/comp_words_carousel.png";
import ThumbImage from "../assets/images/icon/thumbnail/comp_image.png";
import ThumbRecorder from "../assets/images/icon/thumbnail/comp_recording.png";

export const contentComponentsThumbMap: Partial<Record<ContentType, string>> = {
  activityGuideCharacter: ThumbActivityGuide,
  audio: ThumbAudio,
  audioAndWordsCarousel: ThumbAudioAndWordsCarousel,
  borderTextBox: ThumbBorderTextBox,
  cardTab: ThumbCardTab,
  characterCardList: ThumbCharacterCardList,
  contentsCardList: ThumbContentsCardList,
  conversation: ThumbConversation,
  conversationWordList: ThumbConversationWordList,
  cornerGuideCharacter: ThumbCornerGuideCharacter,
  explainingCharacter: ThumbExplainingCharacter,
  iconText: ThumbIconText,
  imageWithDescriptionList: ThumbImageWithDescriptionList,
  imageWithCaptionList: ThumbImage,
  multiLevelActionCard: ThumbMultiLevelActionCard,
  multiLevelActionSentenceCard: ThumbMultiLevelActionSentenceCard,
  notiCharacterList: ThumbNotiCharacterList,
  numberingTextList: ThumbNumberingTextList,
  recorder: ThumbRecorder,
  speaking: ThumbSpeaking,
  text: ThumbText,
  toggleSentenceList: ThumbToggleSentenceList,
  video: ThumbVideo,
  wordsCarousel: ThumbWordsCarousel,
};
