/**
 * Helpful functions for weekly eng meeting
 * @author: brianstarke
 */
function onOpen() {
  // Add a menu with some items, some separators, and a sub-menu.
  DocumentApp.getUi().createMenu('isocket Engineering')
      .addItem('add next meeting', 'prependNextWeek')
      .addToUi();
}

/**
 * Prepends eng meeting notes with next weeks template
 */
function prependNextWeek() {
  var doc = DocumentApp.getActiveDocument();
  var body = doc.getBody();
  
  // get date, predict next weeks meeting date
  var prevMeetingDate = body.getChild(0).asText().getText();
  var nextMeetingDate = new Date();
  nextMeetingDate.setTime(new Date(prevMeetingDate).getTime() + (7 * 24 * 60 * 60 * 1000));
    
  // prepend next weeks template
  body.insertPageBreak(0);
  body.insertListItem(0, '').setGlyphType(DocumentApp.GlyphType.BULLET);
  body.insertParagraph(0, "Other").setHeading(DocumentApp.ParagraphHeading.HEADING5);
  body.insertListItem(0, '').setGlyphType(DocumentApp.GlyphType.BULLET);
  body.insertParagraph(0, "Protip").setHeading(DocumentApp.ParagraphHeading.HEADING5);
  body.insertListItem(0, '').setGlyphType(DocumentApp.GlyphType.BULLET);
  body.insertParagraph(0, "Fails").setHeading(DocumentApp.ParagraphHeading.HEADING5);
  body.insertListItem(0, '').setGlyphType(DocumentApp.GlyphType.BULLET);
  body.insertParagraph(0, "Wins").setHeading(DocumentApp.ParagraphHeading.HEADING5);
  body.insertListItem(0, '').setGlyphType(DocumentApp.GlyphType.BULLET);
  body.insertParagraph(0, "Current Projects").setHeading(DocumentApp.ParagraphHeading.HEADING5);
  body.insertListItem(0, '').setGlyphType(DocumentApp.GlyphType.BULLET);
  body.insertParagraph(0, "Pager Duty").setHeading(DocumentApp.ParagraphHeading.HEADING5);
  body.insertListItem(0, '').setGlyphType(DocumentApp.GlyphType.BULLET);
  body.insertParagraph(0, "Hiring Updates").setHeading(DocumentApp.ParagraphHeading.HEADING5);
  body.insertListItem(0, '').setGlyphType(DocumentApp.GlyphType.BULLET);
  body.insertParagraph(0, "Action Items from " + prevMeetingDate).setHeading(DocumentApp.ParagraphHeading.HEADING5);
  body.insertParagraph(0, "Attendees : ").setHeading(DocumentApp.ParagraphHeading.HEADING6);
  body.insertParagraph(0, Utilities.formatDate(nextMeetingDate, "GMT", "M/d/yyyy")).setHeading(DocumentApp.ParagraphHeading.HEADING2);

  return doc;
}
